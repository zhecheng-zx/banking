/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block">
      <div class="block-item">
        <h3 class="text">我的定制方案</h3>
      </div>
      <div class="block-item gary">
        <el-button type="danger" @click="addNewCustom()">新增定制方案</el-button>
      </div>
      <div class="block-item last-table min-height-400">
        <el-table
          :stripe="true"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="id"
            label="序号"
            width="80">
            <template scope="scope">
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column
            align="left"
            prop="name"
            label="定制方案名称"
            width="220">
          </el-table-column>
          <el-table-column
            align="left"
            prop="content"
            label="定制方案内容"
            width="350">
          </el-table-column>
          <el-table-column
            align="left"
            label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click="updateCustom(scope.row.id)">编辑</el-button>
              <el-button type="text" class="text-red" size="small" @click="delOldCustom(scope.row.id)"><span class="text-red">删除</span></el-button>
              <span class="red-var" v-if="scope.row.connive==='是'">已设置默认</span>
            </template>
          </el-table-column>
        </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
  .min-height-400{
    min-height: 400px;
  }
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
  .inline-box a{
    color: #333333;
    text-decoration: none;
  }
  .inline-box a:hover{
    color: #9e0110;
  }
  .inline-box a:focus,
  .inline-box a.active{
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
  export default{
    data () {
      return {
        tableData: [],
        currentPage: 1,

        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        }
      }
    },
    components: {},
    methods: {
      getCustomList(){
        let _this = this
        _this.$store.dispatch("ANTIFRAUD_CUSTOM").then((res,req) => {
          if(res.success){
            _this.tableData = res.data
          }else{
            _this.$notify({
              title: '提示信息',
              message: res.msg,
              type: res.success?'success':'error',
              duration: '2000'
            })
          }
        })
      },
      addNewCustom(){
        sessionStorage.setItem('from_page','/accountManager/myScheme')
        this.$router.push({path:'/antiFraud/custom_template'})
      },
      delOldCustom(params){
        let _this = this,param = {}
        param.id = params
        _this.$confirm('是否确认删除该定制方案?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$store.dispatch("ANTIFRAUD_CUSTOM_DEL",{ param }).then((res,req) => {
              if(res.success){
              _this.getCustomList()
            }
            this.$notify({
              title: '提示信息',
              message: res.success?'删除成功！':res.msg,
              type: res.success?'success':'error',
              duration: '2000'
            })
          })
        }).catch((error) => {
          _this.$notify({
            type: 'info',
            message: '已取消删除',
            duration: '2000'
          })
        })
      },
      deleteCustomFun(){
        let _this = this
        _this.$store.dispatch("ANTIFRAUD_CUSTOM_DEL").then((res,req) => {
          if(res.success){
            _this.getCustomList()
          }
          this.$notify({
            title: '提示信息',
            message: res.success?'删除成功！':res.msg,
            type: res.success?'success':'error',
            duration: '2000'
          })
        })
      },
      updateCustom(param){
        sessionStorage.setItem('from_page','/accountManager/myScheme')
        this.$router.push({path:'/antiFraud/custom_template/'+param})
      }
    },
    beforeMount(){
      this.getCustomList()
    }
  }
</script>


