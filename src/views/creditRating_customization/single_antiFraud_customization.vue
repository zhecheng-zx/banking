/**
* Created by zhangxin on 2017/9/4.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg">
        <h1 class="text-center">
          输入信息
        </h1>
        <h2 class="text-center">类型：信用评估（详细版）</h2>
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-md-4 control-label"><span class="text-red">*</span>查询姓名：</label>
            <div class="col-md-5">
              <input class="form-control" type="text" v-model="param.name" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label"><span class="text-red">*</span>查询身份证号：</label>
            <div class="col-md-5">
              <input class="form-control" type="text" v-model="param.idNo" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label"><span class="text-red">*</span>查询手机号：</label>
            <div class="col-md-5">
              <input class="form-control" type="text" v-model="param.mobile" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label"><span class="text-red">*</span>查询银行卡号：</label>
            <div class="col-md-5">
              <input class="form-control" type="text" v-model="param.cardNo" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">支付金额：</label>
            <div class="col-md-5">
              <div class="form-control-static"><strong class="text-red">{{ price }}</strong>元</div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label"><span class="text-red">*</span>支付密码：</label>
            <div class="col-md-5">
              <input class="form-control" autocomplete="off" v-model="param.payPassword" type="password" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-5 col-md-offset-4">
              <label>
                <input type="checkbox" v-model="checked" />
                我已阅读并同意 <a href="/" target="_blank"> 《用户授权协议》</a>
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-5 col-md-offset-4">
              <!--<router-link to="result" class="btn btn-danger" type="button" @click="confirm()" v-loading.fullscreen.lock="fullscreenLoading">确定</router-link>-->
              <el-button type="danger" size="large" class="wp100" @click="confirm()" v-loading.fullscreen.lock="fullscreenLoading">确定</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /**
   * import '../../assets/vendor/iCkeck-v1.0.2/js/icheck.min';
   * import "vue-style-loader!css-loader!sass-loader!../../assets/vendor/iCkeck-v1.0.2/css/skins/square/blue.css";
   * import loginButton from './components/loginButton.vue';
   */
  export default{
    data () {
      return {
        msg: '标准_输入',
        fullscreenLoading:false,
        param:{
          name: '',
          idNo: '',
          mobile: '',
          cardNo: '',
          payPassword: ''
        },
        checked: false,
        price: 0
      }
    },
    components: {},
    methods: {
      confirm(){
        let _this = this
        if(_this.isChecked()){
          let param = {}
          param.realname = _this.param.name
          param.idNumber = _this.param.idNo
          param.mobile = _this.param.mobile
          param.cardNo = _this.param.cardNo
          param.payPwd = hex_md5(_this.param.payPassword)
          _this.fullscreenLoading = true
          _this.$store.dispatch('ASSESS_DETAILS_QUERY',{
            param
          }).then((res,req)=>{
            if(res.success){
              _this.loginStatus = true
              _this.fullscreenLoading = false
              let data = res.data
              sessionStorage.setItem("ANTIFRAUD_SQUERYONE_tradeId",data)
              _this.$router.push({path:'customization_result'})
            }else{
              _this.fullscreenLoading = false
            }
            _this.$notify({
              title: '提示信息',
              message: res.msg,
              type: res.success ? 'success' : 'error',
              duration: '1000'
            });
          }).catch(function (error) {
            _this.fullscreenLoading = false
          })
        }
      },
      isChecked(){
        if(this.checked){
            return true
        }else{
            this.openVn()
            return false
        }
      },
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '请选择'),
            h('i', { style: 'color: teal' }, '用户协议')
          ])
        });
      },
      getPrice(){
        let param = {},_this = this
        param.solutionId = 9
        _this.fullscreenLoading = true
        _this.$store.dispatch('COMPUTE_SINGLE',{ param }).then((res,req)=>{
          if(res.success){
            _this.price = res.data.price.toFixed(2)
          }
          _this.fullscreenLoading = false
        }).catch((error)=>{
          _this.fullscreenLoading = false
        })
      },
    },
    beforeMount(){
      this.getPrice()
    }
  }
</script>


