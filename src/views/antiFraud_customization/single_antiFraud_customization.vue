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
        <h2 class="text-center">类型：反欺诈（定制版）</h2>
        <div class="form-horizontal">
          <div class="form-group" v-for="item in resultParam">
            <label class="col-md-4 control-label"><span class="text-red">*</span>查询{{item.zhName}}：</label>
            <div class="col-md-5">
              <input class="form-control" type="text" v-model="param[item.enName]" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">支付金额：</label>
            <div class="col-md-5">
              <div class="form-control-static"><strong class="text-red">{{ new Number(price).toFixed(2) }}</strong>元</div>
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
                我已阅读并同意 <router-link to="/userAgreement" target="_blank"> 《用户授权协议》</router-link>
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
        param:{},
        resultParam:[],
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
          param = $.extend({},{},_this.param)
          param.payPassword = hex_md5(_this.param.payPassword)
          param.customSolutionId = sessionStorage.getItem('customTempId')
          _this.fullscreenLoading = true
          _this.$store.dispatch('ANTIFRAUD_SQUERYTWO',{
            param
          }).then((res,req)=>{
            if(res.success){
              _this.loginStatus = true
              _this.fullscreenLoading = false
              let data = res.data
              sessionStorage.setItem("ANTIFRAUD_SQUERYONE_tradeId",data.tradeId)
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
          }).catch((error)=>{
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
      loadItems(){
        let _this = this,
          param = {}
          param.id = sessionStorage.getItem('customTempId')
        _this.$store.dispatch('ANTIFRAUD_CUSTOM_GETARGS',{ param }).then((res,req) =>{
          if(res.success){
            _this.resultParam = res.data
            res.data.map(function (item,index) {
              _this.param[item.enName] = ''
            })
          }
        })
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
        let param = {},_this = this,ids = sessionStorage.getItem('customTempId')
        param.id = parseInt(ids)
        _this.fullscreenLoading = true
        _this.$store.dispatch('ANTIFRAUD_CUSTOM_CHARGE',{ param }).then((res,req)=>{
          if(res.success){
            _this.price = res.data
          }
          _this.fullscreenLoading = false
        }).catch((error)=>{
          _this.fullscreenLoading = false
        })
      }
    },
    beforeMount(){
      this.loadItems()
      this.getPrice()
    }
  }
</script>


