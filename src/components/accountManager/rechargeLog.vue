/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div v-loading.body="loading">
    <div class="block">
      <div class="block-item">
        <h3 class="text">充值记录</h3>
      </div>
      <div class="block-item gary">
        <label class="label">充值时间：</label>
        <div class="inline-block w220">
          <el-date-picker
            v-model="form.dateStart"
            type="date"
            placeholder="开始日期"
            :picker-options="pickerOptions0"
            :editable="false">
          </el-date-picker>
        </div>
        <label class="control-label">-</label>
        <div class="inline-block w220">
          <el-date-picker
            v-model="form.dateEnd"
            type="date"
            placeholder="结束日期"
            :picker-options="pickerOptions0"
            :editable="false">
          </el-date-picker>
        </div>
        <div class="inline-block">
          <el-button type="danger" @click="confirmForm()"> 查询 </el-button>
        </div>
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
            label="流水号"
            width="220">
          </el-table-column>
          <el-table-column
            align="center"
            prop="types"
            label="充值方式"
            width="200">
          </el-table-column>
          <el-table-column
            align="center"
            prop="amount"
            label="充值金额(元)"
            width="200">
          </el-table-column>
          <el-table-column
            align="center"
            prop="createTime"
            label="充值时间">
          </el-table-column>
        </el-table>
        <p class="text-right pd35">充值统计：累计充值<span class="text-red">{{ statistics.count }}</span>笔，共充值<span class="text-red">{{ statistics.sum.toFixed(2) }}</span>元</p>
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
        loading: true,
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
          pageNum: 1,
          pageSize: 10
        },
        params: {
          dateStart: '',
          dateEnd: '',
          dateType: '',
          pageNum: 1,
          pageSize: 10
        },
        total: 0,
        statistics:{
            count: 0,
            sum: 0.00
        },
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
        if(!_this.form.dateStart && !_this.form.dateEnd){
          _this.$message({
            message: '请输入选择正确的时间段',
            type: 'warning'
          })
          return
        }else if(new Date(_this.form.dateStart).getTime() > new Date(_this.form.dateEnd)){
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
          _this.loading = true
          param = $.extend({},{},_this.params)
          param.dateStart = ''+ param.dateStart!='' ? new Date(param.dateStart).Format('yyyy-MM-dd'): ''
          param.dateEnd = ''+ param.dateEnd!='' ? new Date(param.dateEnd).Format('yyyy-MM-dd'): ''
        _this.$store.dispatch('RECHARGE_SEARCH',{ param }).then((res,req) => {
          if(res.success){
            res.data.page.list.map((item,index)=>{
              let obj = {}
              obj = $.extend({},item)
              obj.amount = obj.amount.toFixed(2)
              _this.tableData.push(obj)
            })
            _this.total = res.data.page.total
            _this.statistics = res.data.statistics
          }else{
            _this.$notify({
              title: '提示信息',
              message: res.msg,
              type: 'error',
              duration: '2000'
            })
          }
        _this.loading = false
        }).catch((error)=>{
          _this.loading = false
        })
      },
      quickSearch(param){
        let _this = this
        _this.current = param
        _this.form = {
          dateStart: '',
          dateEnd: '',
          dateType: param,
          pageNum: 1,
          pageSize: 10
        }
        _this.params = $.extend({},_this.form)
        _this.getList();
      }
    },
    beforeMount () {
      this.getList()
    }
  }
</script>


