<template>
  <div id="app">
    <div class="site-nav header--fixed">
      <div class="container">
        <p class="pull-left nav-tips">客服电话：400 2324 4523（周一至周五 AM9:00-PM18:00）</p>
        <p class="pull-right login-link">
          您好，<span>155****5304</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);">退出</a>
        </p>
      </div>
    </div>
    <div class="navbar header header--fixed">
      <div class="container">
        <div class="navbar-header logo">
          <router-link to="/" exact class="navbar-brand"><img src="/public/images/logo.png" /><span>金融大数据智能决策服务平台</span></router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/antiFraud">反欺诈</router-link></li>
          <li><router-link to="/creditRating">信用评估</router-link></li>
          <li><router-link to="/show">贷后风险监测</router-link></li>
          <li><router-link to="/ask">风险舆情</router-link></li>
          <li><router-link to="/job">精准营销</router-link></li>
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
<style lang="scss">

</style>
