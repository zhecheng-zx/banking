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
        <el-button type="danger">新增定制方案</el-button>
      </div>
      <div class="block-item noborder">
        <div class="inline-box">
          <a class="inline-block" href="javascript:void(0);">今天</a>|
          <a class="inline-block" href="javascript:void(0);">最近一周</a>|
          <a class="inline-block" href="javascript:void(0);">最近一个月</a>|
          <a class="inline-block" href="javascript:void(0);">最近三个月</a>|
          <a class="inline-block" href="javascript:void(0);">最近半年</a>
        </div>
      </div>
      <div class="block-item last-table">
        <el-table
          :stripe="true"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="id"
            label="序号"
            width="80">
          </el-table-column>
          <el-table-column
            align="center"
            prop="type"
            label="定制方案名称"
            width="140">
          </el-table-column>
          <el-table-column
            align="center"
            prop="jinE"
            label="定制方案内容"
            width="360">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <template scope="scope">
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" class="text-red" size="small"><span class="text-red">删除</span></el-button>
              <span class="red-var">已设置默认</span>
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
        tableData: [{
          id: '1',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '2',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '3',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '4',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '5',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '6',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '7',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '8',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '9',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }, {
          id: '10',
          type: '线下转账',
          jinE: '5000.00元',
          status: '交易成功',
          date: '2017/08/02 00:00:00'
        }],
        currentPage: 1,

        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        form:{
          status: '',
          date1: '',
          date2: '',
        }
      }
    },
    components: {},
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted () {

    }
  }
</script>


