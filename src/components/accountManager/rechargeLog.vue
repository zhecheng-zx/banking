/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block">
      <div class="block-item">
        <h3 class="text">充值记录</h3>
      </div>
      <div class="block-item gary">
        <label class="label">充值时间：</label>
        <div class="inline-block w220">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
          </el-date-picker>
        </div>
        <label class="control-label">-</label>
        <div class="inline-block w220">
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
          </el-date-picker>
        </div>
        <div class="inline-block">
          <el-button type="danger"> 查询 </el-button>
        </div>
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
            label="流水号"
            width="180">
          </el-table-column>
          <el-table-column
            align="center"
            prop="type"
            label="充值方式"
            width="180">
          </el-table-column>
          <el-table-column
            align="center"
            prop="jinE"
            label="充值金额"
            width="180">
          </el-table-column>
          <el-table-column
            align="center"
            prop="date"
            label="充值时间">
          </el-table-column>
        </el-table>
        <p class="text-right pd35">充值统计：累计充值<span class="text-red">6</span>笔，共充值<span class="text-red">3000.00</span>元</p>
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
    margin-top: 20px;
    margin-bottom: 30px;
    padding-right: 35px;
  }
  .pagination-box{
    margin-left: 30px;
    padding-right: 35px;
    padding-bottom: 40px;
  }
  .pagination-box .el-pagination{
    float: right;
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
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }, {
          id: '12312312312312312',
          type: '线下转账',
          jinE: '5000.00元',
          date: '2017/08/02 00:00:00'
        }],
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        currentPage: 1,
        value1: '',
        value2: ''
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


