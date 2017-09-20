/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block" v-if="articleId == -1">
      <div class="block-item">
        <h3 class="text">消息中心</h3>
      </div>
      <div class="block-item last-table">
        <el-table
          :stripe="true"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="message.header"
            label="标题"
            width="180">
            <template scope="scope">
              <!--<router-link size="small" :to="'/accountManager/messagesInfo/'">{{ scope.row.message.header }}</router-link>-->
              <el-button type="text" @click="showMessage(scope.row.message.id)">{{ scope.row.message.header }}</el-button>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="message.content"
            label="消息内容"
            width="">
          </el-table-column>
          <el-table-column
            align="center"
            prop="message.createDate"
            label="发送时间"
            width="180">
          </el-table-column>
          <el-table-column
            align="center"
            prop="isRead"
            label="状态"
            width="100">
            <template scope="scope">
              <el-button type="text" size="small" v-if="scope.row.isRead==0">未读</el-button>
              <el-button type="text" size="small" disabled v-if="scope.row.isRead==1">已读</el-button>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            width="100"
            label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData, scope.row.message.id)"><span class="text-red">删除</span></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-box clearfix">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="params.pageNum"
            :page-size="params.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
    <messages-details v-if="articleId != -1" :content="content" @hideMessage="hideMessage"></messages-details>
  </div>
</template>
<style lang="css" scoped>
  .el-form-item{
    margin-bottom: 0;
  }
  .block-item.gary{
    padding-left: 35px;
  }
  .block .block-item{
    border-right: none;
  }
  .noborder{
    border:none;
  }
  .block-item .text{
    padding-left: 15px;
  }
  .block-item.last-table{
    border:none;
    padding: 0;
  }
  .last-table .table>tbody>tr>td{
    border:none;
  }
  label.label {
    padding-left: 35px;
    color: #333;
  }
  .inline-box{
    padding-left: 25px;
  }
  .inline-block {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
  }
  .w220 {
    width: 220px;
  }
  .block-item a{
    color: #333333;
    text-decoration: none;
  }
  .block-item a:hover{
    color: #9e0110;
  }
  .block-item a:focus,
  .block-item a.active{
    color: #de182b;
  }
  .table-striped>tbody>tr:nth-of-type(odd){
    background-color: transparent;
  }
  .table-striped>tbody>tr:nth-of-type(even){
    background-color: #f4f5f9;
  }
  .table.text-center>thead>tr>th{
    background-color: #f4f5f9;
    border-bottom: none;
  }
  .pd35{
    margin-bottom: 30px;
    padding-right: 35px;
  }
  .pagination-box{
    margin-top: 20px;
    margin-left: 30px;
    padding-right: 35px;
    padding-bottom: 40px;
  }
  .pagination-box .el-pagination{
    float: right;
  }
  .el-date-editor.el-input{
    width: 160px;
  }
  .el-select{
    width: 100px;
  }
</style>
<script>
  /**
   * import '../../assets/vendor/iCkeck-v1.0.2/js/icheck.min';
   * import "vue-style-loader!css-loader!sass-loader!../../assets/vendor/iCkeck-v1.0.2/css/skins/square/blue.css";
   * import loginButton from './components/loginButton.vue';
   */
  import messagesDetails from './messagesDetails.vue'
  export default{
    data () {
      return {
        tableData: [],
        params: {
          pageNum: 1,
          pageSize: 10
        },
        total: 0,
        oneLoad: true,
        articleId: -1,
        content:{title:''}
      }
    },
    components: { messagesDetails },
    computed: {
    },
    beforeMount () {
      this.hideMessage()
      this.content = {
        title: '',
        content: ''
      }
    },

    beforeDestroy () {
    },
    watch: {
      showMessage(){
        this.articleId = 1
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.params.pageNum = val
        this.getList()
      },
      deleteRow(index, rows, ids) {
          let _this = this,
          param = {}
          param.id = ids
        _this.$store.dispatch('MESSAGE_DEL',{ param }).then((res,req) => {
          if(res.success){
            rows.splice(index, 1);
          }
          _this.$notify({
            title: '提示信息',
            message: res.msg,
            type: res.success?'success':'error',
            duration: '2000'
          })
        }).catch((error)=>{
        })
      },
      getList(){
        let _this = this,
        param = {}
        param = $.extend({},{},_this.params)
        _this.$store.dispatch('MESSAGE',{ param }).then((res,req) => {
          if(res.success){
            _this.tableData=res.data.page.list
            _this.tableData.map(function (item,index) {
              item.message.createDate = item.message.createDate? new Date(item.message.createDate).Format('yyyy-MM-dd h:mm:ss') : ''
            })
            _this.total = res.data.page.total
          }else{
            _this.$notify({
              title: '提示信息',
              message: res.msg,
              type: 'error',
              duration: '2000'
            })
          }
        }).catch((error)=>{
        })
      },
      showMessage(params){
        let _this = this,param = {}
        _this.$bar.start()
        param.id = params
        _this.$store.dispatch('MESSAGE_SHOW',{ param }).then((res,req) => {
          if(res.success){
            _this.articleId = 1
            _this.content = res.data
          }
          _this.$bar.finish()
        }).catch((error)=>{
          _this.$bar.finish()
        })
      },
      hideMessage(){
        this.articleId = -1
        this.getList()
      }
    }
  }
</script>


