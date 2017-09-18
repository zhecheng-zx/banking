<template>
  <div id="app">
    <div class="site-nav header--fixed">
      <div class="container">
        <p class="pull-left nav-tips">客服电话：400 2324 4523（周一至周五 AM9:00-PM18:00）</p>
        <p class="pull-right login-link">
          <router-link v-if="isLogin" to="/accountManager">您好，<span>{{ userName }}</span></router-link>
          <a href="/login" v-if="isLogin" @click="logout()">退出</a>
          <router-link v-else to="/login">登录</router-link>
        </p>
      </div>
    </div>
    <div class="navbar header header--fixed">
      <div class="container">
        <div class="navbar-header logo">
          <router-link to="/index" v-if="isLogin" exact class="navbar-brand"><img src="/public/images/logo.png" /><span>金融大数据智能决策服务平台</span></router-link>
          <router-link to="/login" v-if="!isLogin" exact class="navbar-brand"><img src="/public/images/logo.png" /><span>金融大数据智能决策服务平台</span></router-link>
        </div>
        <ul v-if="isLogin" class="nav navbar-nav navbar-right">
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
      if(this.$route.path==='\/login'){
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
        localStorage.removeItem('userName')
        sessionStorage.removeItem('ANTIFRAUD_SQUERYONE_tradeId')
        sessionStorage.removeItem('_import_tradeId')
        sessionStorage.removeItem('cost')
        sessionStorage.removeItem('customTempId')
        sessionStorage.removeItem('dataCount')
        sessionStorage.removeItem('token')
        this.$router.push({path:'/login'})
      }
    },
    watch: {
      $route(){
        if(this.$route.path==='\/login'){
          this.isLogin = false
        }else{
          this.isLogin = true
        }
        this.userName = localStorage.getItem('userName')
      }
    },
    method:{

    }
  }
</script>
