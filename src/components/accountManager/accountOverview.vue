/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block clearfix">
        <div class="col-md-6 block-item"><span class="text">账户余额：<strong>5.00</strong>元</span></div>
        <div class="col-md-6 block-item"><span class="text">预付金额：<strong>2.00</strong>元</span></div>
        <div class="col-md-6 block-item gary">
          <span class="red-var">充值记录</span>
        </div>
        <div class="col-md-6 block-item gary">
          <span class="red-var">消费记录</span>
        </div>
        <div class="col-md-6 block-item">
          <p class="log">您在2017年01月02号充值了<span class="text-red">50.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">520.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">150.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">230.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">3350.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">4450.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">5350.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">32150.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">12350.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">12350.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">12350.00</span>元</p>
          <p class="log">您在2017年01月02号充值了<span class="text-red">12350.00</span>元</p>
          <p class="text-right search">
            <router-link to="/accountManager/rechargeLog">查询所有充值记录 <i> >> </i></router-link>
          </p>
        </div>
        <div class="col-md-6 block-item">
          <p class="log">您在2017年01月02号查询个人征信消费了<span class="text-red">50.00</span>元</p>
          <p class="log">您在2017年01月02号查询个人征信消费了<span class="text-red">520.00</span>元</p>
          <p class="log">您在2017年01月02号查询个人征信消费了<span class="text-red">150.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">230.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">3350.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">4450.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">5350.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">32150.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">12350.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">12350.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">12350.00</span>元</p>
          <p class="log">您在2017年01月02号查询反欺诈消费了<span class="text-red">12350.00</span>元</p>
          <p class="text-right search">
            <router-link to="/accountManager/dealLog">查询所有消费记录 <i> >> </i></router-link>
          </p>
        </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
  .block-item .text{
    font-size: 14px;
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
        msg: ''
      }
    },
    components: {},
    methods: {},
    mounted () {

    }
  }
</script>


