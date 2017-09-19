/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block">
      <div class="block-item">
        <h3 class="text">查询记录</h3>
      </div>
      <div class="block-item gary">
        <el-form :model="ruleForm2" :inline="true" :rules="rules" ref="ruleForm2" label-width="100px">
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="ruleForm2.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号码：" prop="mobile">
            <el-input v-model="ruleForm2.mobile"></el-input>
          </el-form-item>
          <el-form-item label="身份证号：" prop="idNo">
            <el-input v-model="ruleForm2.idNo"></el-input>
          </el-form-item>
          <el-form-item label="查询状态：">
            <el-select v-model="ruleForm2.status" placeholder="全部">
              <el-option label="全部" value=""></el-option>
              <el-option label="处理中" value="0"></el-option>
              <el-option label="已完成" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="查询类型：">
            <el-select v-model="ruleForm2.type" placeholder="全部">
              <el-option label="全部" value=""></el-option>
              <el-option label="反欺诈" value="1"></el-option>
              <el-option label="信用评估" value="2"></el-option>
              <el-option label="贷后风险监测" value="3"></el-option>
              <el-option label="风险舆情" value="4"></el-option>
              <el-option label="精准营销" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="查询时间：">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="开始时间" :picker-options="pickerOptions0" v-model="ruleForm2.startDate" clsss="wp100" :editable="false"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line text-center" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-date-picker type="date" placeholder="结束时间" :picker-options="pickerOptions0" v-model="ruleForm2.endDate" class="wp100" :editable="false"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item class="wp100 text-right">
            <el-button type="danger" @click="submitForm('ruleForm2')"> 查 询 </el-button>
            <el-button type="danger" @click="resetForm('ruleForm2')"> 重 置 </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="block-item last-table">
        <el-table
          :stripe="true"
          :data="tableData"
          class="wp100">
          <el-table-column
            fixed
            align="left"
            prop="id"
            label="查询编号"
            width="220">
          </el-table-column>
          <el-table-column
            align="center"
            prop="type"
            label="查询类型"
            width="100">
          </el-table-column>
          <el-table-column
            align="left"
            prop="params"
            label="查询参数"
            width="320">
          </el-table-column>
          <el-table-column
            align="center"
            prop="tradeDate"
            label="查询时间"
            width="180">
          </el-table-column>
          <el-table-column
            align="center"
            prop="status"
            label="查询状态"
            width="100">
          </el-table-column>
          <el-table-column
            fixed="right"
            align="center"
            label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click="searchDetails(scope.row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-box clearfix">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="ruleForm.pageNum"
            :page-size="ruleForm.pageSize"
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
  .pagination-box{
    margin-top: 20px;
    margin-left: 30px;
    padding-right: 35px;
    padding-bottom: 40px;
  }
  .pagination-box .el-pagination{
    float: right;
  }
  .el-form--inline>.el-form-item {
    width: 436px;
    margin-bottom: 20px;
  }
  .el-form--inline>.el-form-item.wp100{
    width: 100%;
    padding-right: 38px;
  }
  .el-form--inline>.el-form-item .el-select,
  .el-form--inline>.el-form-item .el-input{
    width:330px;
  }
  .el-form--inline>.el-form-item .el-date-editor.el-input{
    width: 151px !important;
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
        ruleForm: {
          name: '',
          mobile: '',
          idNo: '',
          status: '',
          type: '',
          startDate: '',
          endDate: '',
          pageNum: 1,
          pageSize: 10
        },
        ruleForm2: {
          name: '',
          mobile: '',
          idNo: '',
          status: '',
          type: '',
          startDate: '',
          endDate: '',
          pageNum: 1,
          pageSize: 10
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() >= Date.now();
          }
        },
        total:0,
        rules: {
          name: [
            { required: false, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          mobile: [
            { required: false },
            { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur'}
          ],
          idNo: [
            { required: false },
            { min: 18, max: 18, message: '请输入正确的身份证号码', trigger: 'blur'}
          ],
          date1: [
            { type: 'date', required: false, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: false, message: '请选择日期', trigger: 'change' }
          ]
        }
      }
    },
    components: {},
    methods: {
      handleSizeChange(val) {
      },
      handleCurrentChange(val) {
        this.ruleForm.pageNum = val
        this.getRecordsList()
      },
      submitForm(formName) {
        let _this = this
        _this.ruleForm = $.extend({},_this.ruleForm,_this.ruleForm2)
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.getRecordsList()
          } else {
            _this.$notify({
            title: '提示信息',
            message: "输入信息格式不正确！",
            type: 'error',
            duration: '2000'
          })
          return false;
      }
      })
      },
      getRecordsList(){
        /****
         * 获取单一查询页表格数据
         * */
        let _this = this,param = {}
        param = $.extend({},{},_this.ruleForm)
        param.startDate = ''+ param.startDate!='' ? new Date(param.startDate).Format('yyyy-MM-dd'): ''
        param.endDate = ''+ param.endDate!='' ? new Date(param.endDate).Format('yyyy-MM-dd'): ''
        _this.$store.dispatch('RECORDS_SINGLE',{ param }).then((res,req) => {
          if(res.success){
            _this.tableData=res.data.page.list
            _this.total = res.data.page.total
          }
        }).catch((error)=>{
        })
      },
      resetForm(formName) {
        this.ruleForm2={
          name: '',
          mobile: '',
          idNo: '',
          status: '',
          type: '',
          startDate: '',
          endDate: '',
          pageNum: 1,
          pageSize: 10
        }
      },
      searchDetails(param){
        /**
         * 获取详情页面的参数
         * param （当前点击行的数据）
         */
        sessionStorage.setItem("ANTIFRAUD_SQUERYONE_tradeId",param.id)
        if (param.type && param.type=='反欺诈'){
          this.$router.push({path:'/antiFraud/result'})
        }else if(param.type){
          this.$router.push({path:'/creditRating/result'})
        }else{
          _this.$notify({
            title: '提示信息',
            message: "数据有误---该查询类型不存在",
            type: 'error',
            duration: '2000'
          })
        }
      }
    },
    mounted () {
      this.token = sessionStorage.getItem('token')
      this.getRecordsList()
    }
  }
</script>
