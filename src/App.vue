<template>
  <div id="app">
    <div class="site-nav header--fixed">
      <div class="container">
        <p class="pull-left nav-tips">客服电话：400 2324 4523（周一至周五 AM9:00-PM18:00）</p>
        <p class="pull-right login-link">
          <router-link v-if="isLogin&&userName" to="/accountManager">您好，<span>{{ userName }}</span></router-link>
          <a href="javascript:void(0);" v-if="isLogin&&userName" @click="logout()">退出</a>
          <router-link v-else to="/">您好，欢迎来到大数据智能决策服务平台</router-link>
        </p>
      </div>
    </div>
    <div class="navbar header header--fixed">
      <div class="container">
        <div class="navbar-header logo">
          <router-link to="/index" v-if="isLogin" exact class="navbar-brand"><img src="/public/images/logo.png" /><span>金融大数据智能决策服务平台</span></router-link>
          <router-link to="/login" v-if="!isLogin" exact class="navbar-brand"><img src="/public/images/logo.png" /><span>金融大数据智能决策服务平台</span></router-link>
        </div>
        <ul v-if="isLogin&&userName" class="nav navbar-nav navbar-right">
          <li><router-link to="/antiFraud">反欺诈</router-link></li>
          <li><router-link to="/creditRating">信用评估</router-link></li>
          <li><router-link to="/postLoan">贷后风险监测</router-link></li>
          <li><router-link to="/riskOpinion">风险舆情</router-link></li>
          <li><router-link to="/precisionMarketing">精准营销</router-link></li>
        </ul>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="wrapper mt107"></router-view>
    </transition>
    <div class="footer">
      <div class="container">
        <p>联系我们</p>
        <p>4000-617-888</p>
        <p>工作时间：周一至周五8:30-18:00</p>
        <p>技术支持： support@huishu.com.cn  商务合作： liyan@huishu.com.cn</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {getCookie,delCookie} from './util/cookie'
  export default {
    data(){
      return {
        isLogin: this.$store.getters.getIsLogin,
        userName: this.$store.getters.getUserName
      }
    },
    computed:{

    },
    beforeMount(){
      let _this=this;
      if(this.$route.path==='\/login'||this.$route.path==='\/phoneBackPass'||this.$route.path==='\/emailBackPass'||this.$route.path==='\/forgotPassword'){
        this.$store.dispatch("MANAGER_LOGIN_STATE",{
          loginStatus:false
        }).then(() => {
          isLog();
        })
      }else{
        this.$store.dispatch("MANAGER_LOGIN_STATE",{
          loginStatus:true
        }).then(() => {
          isLog();
          this.$store.dispatch("SECURITY_CHECKSESSION").then((res) => {
            if (!res.success) {
              this.clearSession()
              this.$router.push({path: '/login'})
            }
          })
        })
      }
      var isLog = ()=>{
        _this.isLogin = _this.$store.getters.getIsLogin;
      }
      this.userName = localStorage.getItem('userName')
    },
    beforeRouteEnter(to, from, next) {
    },
    methods:{
      logout(){
        this.$store.dispatch("AUTHENTICATE_LOGOUT").then((res) => {
          this.clearSession()
          this.$router.push({path:'/login'})
        }).catch((error)=>{
          this.clearSession()
          this.$router.push({path:'/login'})
        })
      },
      clearSession(){
        delCookie("AUTHENTICATE_TOKEN")
        localStorage.removeItem('userName')
        sessionStorage.removeItem('ANTIFRAUD_SQUERYONE_tradeId')
        sessionStorage.removeItem('_import_tradeId')
        sessionStorage.removeItem('cost')
        sessionStorage.removeItem('customTempId')
        sessionStorage.removeItem('dataCount')
        sessionStorage.removeItem('from_page')
      }
    },
    watch: {
      $route(){
        if(this.$route.path==='\/login'||this.$route.path==='\/phoneBackPass'||this.$route.path==='\/emailBackPass'||this.$route.path==='\/forgotPassword'){
          this.isLogin = false
        }else{
          this.$store.dispatch("SECURITY_CHECKSESSION").then((res)=>{
              if(!res.success){
                this.clearSession()
                this.$router.push({path:'/'})
              }
          })
          this.isLogin = true
        }
        this.userName = localStorage.getItem('userName')
      }
    },
    method:{

    }
  }
</script>
