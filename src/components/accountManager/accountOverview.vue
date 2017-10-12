/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block clearfix">
        <div class="col-md-6 block-item" v-loading="loading"><span class="text">账户余额：<strong>{{ amount.overage.toFixed(2) }}</strong>元</span></div>
        <div class="col-md-6 block-item" v-loading="loading"><span class="text">预付金额：<strong>{{ amount.prepayment.toFixed(2) }}</strong>元</span></div>
        <div class="col-md-6 block-item gary">
          <span class="red-var">充值记录</span>
        </div>
        <div class="col-md-6 block-item gary">
          <span class="red-var">消费记录</span>
        </div>
        <div class="col-md-6 block-item" v-loading="loading1">
          <div class="min-height-350">
            <p class="log" v-for="rItem in rechargeList">您在{{ rItem.createTime }}号充值了<span class="text-red">{{ rItem.amount.toFixed(2) }}</span>元</p>
          </div>
          <p class="text-right search">
            <router-link to="/accountManager/rechargeLog">查询所有充值记录 <i> >> </i></router-link>
          </p>
        </div>
        <div class="col-md-6 block-item" v-loading="loading2">
          <div class="min-height-350">
            <p class="log" v-for="tList in tradingList">您在{{tList.tradeDate}}查询{{ tList.qType }}消费了<span class="text-red">{{ tList.realAmount.toFixed(2) }}</span>元</p>
          </div>
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
  .min-height-350{
    min-height: 350px;
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
        msg: '',
        loading: true,
        loading1: true,
        loading2: true,
        amount: {
          overage: 0,
          prepayment: 0
        },
        tradingList: [],
        rechargeList: []
      }
    },
    components: {},
    methods: {
      getAmount(){
        let _this = this,
          param = {}
        _this.$store.dispatch('RECHARGE_AMOUNT',{ param }).then((res,req) => {
          if(res.success){
            _this.amount = res.data
            _this.loading = false
          }
        }).catch((error)=>{
          _this.loading = false
        })
      },
      getRechargeLatest(){
        let _this = this,
          param = {
            count: 10
          }
        _this.$store.dispatch('RECHARGE_LATEST',{ param }).then((res,req) => {
          if(res.success){
            _this.rechargeList = res.data
            _this.loading1 = false
          }
        }).catch((error)=>{
          _this.loading1 = false
        })
      },
      getTradingLatest(){
        let _this = this,
          param = {
            count: 10
          }
        _this.$store.dispatch('TRADING_LATEST',{ param }).then((res,req) => {
          if(res.success){
            _this.tradingList = res.data
            _this.loading2 = false
          }
        }).catch((error)=>{
          _this.loading2 = false
        })
      }
    },
    beforeMount(){
      this.getAmount()
      this.getRechargeLatest()
      this.getTradingLatest()
    }
  }
</script>


