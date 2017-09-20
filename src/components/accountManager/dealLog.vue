/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block">
      <div class="block-item">
        <h3 class="text">消费记录</h3>
      </div>
      <div class="block-item gary">
        <el-form :inline="true" :model="form">
          <el-form-item label="消费时间：">
            <el-date-picker
              v-model="form.dateStart"
              type="date"
              placeholder="开始日期"
              :picker-options="pickerOptions0"
              :editable="false">
            </el-date-picker>
            -
            <el-date-picker
              v-model="form.dateEnd"
              type="date"
              placeholder="结束日期"
              :picker-options="pickerOptions0"
              :editable="false">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="form.status" placeholder="全部">
              <el-option label="全部" value=""></el-option>
              <el-option label="交易中" value="0"></el-option>
              <el-option label="交易成功" value="1"></el-option>
            </el-select>
          </el-form-item><el-form-item>
          <el-button type="danger" @click="confirmForm()">查询</el-button>
        </el-form-item>
        </el-form>
      </div>
      <div class="block-item noborder">
        <div class="inline-box">
          <a class="inline-block" href="javascript:void(0);" @click="quickSearch(0)" :class="current===0?'active':''">今天</a>|
          <a class="inline-block" href="javascript:void(0);" @click="quickSearch(1)" :class="current===1?'active':''">最近一周</a>|
          <a class="inline-block" href="javascript:void(0);" @click="quickSearch(2)" :class="current===2?'active':''">最近一个月</a>|
          <a class="inline-block" href="javascript:void(0);" @click="quickSearch(3)" :class="current===3?'active':''">最近三个月</a>|
          <a class="inline-block" href="javascript:void(0);" @click="quickSearch(4)" :class="current===4?'active':''">最近半年</a>
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
            label="编号"
            width="220">
          </el-table-column>
          <el-table-column
            align="center"
            prop="qType"
            label="名称"
            width="200">
          </el-table-column>
          <el-table-column
            align="center"
            prop="realAmount"
            label="消费金额(元)"
            width="120">
          </el-table-column>
          <el-table-column
            align="center"
            prop="status"
            label="状态"
            width="100">
          </el-table-column>
          <el-table-column
            align="center"
            prop="tradeDate"
            label="消费时间"
            width="180">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click="searchDetails(scope.row.id)">明细</el-button>
            </template>
          </el-table-column>
        </el-table>
        <p class="text-right pd35">消费统计：累计消费<span class="text-red">{{ consumption.num}}</span>笔，共消费<span class="text-red">{{ consumption.total}}</span>元</p>
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
  .el-date-editor.el-input{
    width: 160px;
  }
  .el-select{
    width: 120px;
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
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        form: {
          dateStart: '',
          dateEnd: '',
          dateType: '',
          status: '',
          pageNum: 1,
          pageSize: 10
        },
        params: {
          dateStart: '',
          dateEnd: '',
          dateType: '',
          status: '',
          pageNum: 1,
          pageSize: 10
        },
        total: 0,
        consumption:{},
        current: ''
      }
    },
    components: {},
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.params.pageNum = val
        this.getList()
      },
      confirmForm(){
        let _this = this
        if(new Date(_this.form.dateStart).getTime() > new Date(_this.form.dateEnd)){
          _this.$message({
            message: '开始时间不能大于结束时间',
            type: 'warning'
          })
          return
        }
        _this.params = $.extend({},_this.params,_this.form)
        _this.getList()
      },
      getList(){
        let _this = this,
        param = {}
        param = $.extend({},{},_this.params)
        param.dateStart = ''+ param.dateStart!='' ? new Date(param.dateStart).Format('yyyy-MM-dd'): ''
        param.dateEnd = ''+ param.dateEnd!='' ? new Date(param.dateEnd).Format('yyyy-MM-dd'): ''
        _this.$store.dispatch('TRADING_SEARCH',{ param }).then((res,req) => {
          if(res.success){
            _this.tableData=res.data.page.list
            _this.total = res.data.page.total
            _this.consumption = res.data.consumption
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
      quickSearch(param){
        let _this = this
        _this.current = param
        _this.form.dateStart = ''
        _this.form.dateEnd = ''
        _this.form.dateType = param
        _this.form.pageNum = 1
        _this.form.pageSize = 10
        _this.params = $.extend({},_this.form)
        _this.getList();
      },
      searchDetails(ids){
          let param = {},_this = this
          param.id = ids
        const h = _this.$createElement;
        _this.$store.dispatch('TRADING_DETAIL',{ param }).then((res,req) => {
          if(res.success){
            _this.$msgbox({
              title:'',
              message:h('p', null, [
                h('span', null, '查询总金额 '),
                h('i', { style: 'color: #de182b' }, res.data.totalAmount),
                h('span', null, '元，实际扣款金额 '),
                h('i', { style: 'color: #de182b' }, res.data.actualAmount),
                h('span', null, '元，退款金额 '),
                h('i', { style: 'color: #de182b' }, res.data.refundAmount),
              ]),
              confirmButtonText: '确定',
            });
          }else{
            _this.$notify({
              title: '提示信息',
              message: res.msg,
              type: 'error',
              duration: '2000'
            })
          }
        })
      }
    },
    beforeMount () {
      this.getList()
    }
  }
</script>


