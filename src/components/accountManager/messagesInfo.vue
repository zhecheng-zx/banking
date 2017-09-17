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
            prop="id"
            label="标题"
            width="180">
            <template scope="scope">
              <router-link size="small" :to="'/accountManager/messagesInfo/' + (scope.row.id)">{{ scope.row.id }}</router-link>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="type"
            label="消息内容"
            width="">
          </el-table-column>
          <el-table-column
            align="center"
            prop="date"
            label="发送时间"
            width="180">
          </el-table-column>
          <el-table-column
            align="center"
            prop="status"
            label="状态"
            width="100">
          </el-table-column>
          <el-table-column
            align="center"
            width="100"
            label="操作">
            <template scope="scope">
              <el-button type="text" size="small"><span class="text-red">删除</span></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-box clearfix">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <messages-details v-if="articleId != -1" :content="content"></messages-details>
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
        tableData: [{
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '4567645674454545',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          status: '未读',
          date: '2017/08/02 00:00:00'
        }],
        oneLoad: true,
        articleId: Number(this.$store.state.route.params.id) || -1,
        currentPage: 1,
        content:{title:''}
      }
    },
    components: { messagesDetails },
    computed: {
      articleIds () {
        return Number(this.$store.state.route.params.id) || -1
      }
    },

    beforeMount () {
      if (this.$root._isMounted) {
        this.loadItems(this.articleId)
      }
      this.content = {
        title: this.articleId,
        content: 40
      }
    },

    beforeDestroy () {
    },
    watch: {
      articleIds (to, from) {
          console.log(to , from);
        this.loadItems(to, from)
      }
    },

    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      loadItems (to = this.page, from = -1) {
        console.log("***")
        this.$bar.start()
        this.articleId = to
        this.content = {
          title: this.articleId,
          content: 40
        }
        this.$bar.finish()
      }
    }
  }
</script>


