/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block clearfix">
        <div class="col-md-6 block-item"><span class="text">账户余额：<strong>{{ amount.overage }}</strong>元</span></div>
        <div class="col-md-6 block-item"><span class="text">预付金额：<strong>{{ amount.prepayment }}</strong>元</span></div>
        <div class="col-md-6 block-item gary">
          <span class="red-var">充值记录</span>
        </div>
        <div class="col-md-6 block-item gary">
          <span class="red-var">消费记录</span>
        </div>
        <div class="col-md-6 block-item">
          <div class="min-height-350">
            <p class="log" v-for="rItem in rechargeList">您在{{ rItem.createTime }}号充值了<span class="text-red">{{ rItem.amount }}</span>元</p>
          </div>
          <p class="text-right search">
            <router-link to="/accountManager/rechargeLog">查询所有充值记录 <i> >> </i></router-link>
          </p>
        </div>
        <div class="col-md-6 block-item">
          <div class="min-height-350">
            <p class="log" v-for="tList in tradingList">您在{{tList.tradeDate}}查询{{ tList.qType }}消费了<span class="text-red">{{ tList.realAmount }}</span>元</p>
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
          }
        }).catch((error)=>{
        })
      },
      getRechargeLatest(){
        let _this = this,
          param = {
            count: 10
          }
        _this.$store.dispatch('RECHARGE_LATEST',{ param }).then((res,req) => {
          console.log(res)
          if(res.success){
            _this.rechargeList = res.data
          }
        }).catch((error)=>{
        })
      },
      getTradingLatest(){
        let _this = this,
          param = {
            count: 10
          }
        _this.$store.dispatch('TRADING_LATEST',{ param }).then((res,req) => {
          console.log(res)
          if(res.success){
            _this.tradingList = res.data
          }
        }).catch((error)=>{
        })
      }
    },
    beforeMount(){
      this.getAmount()
      this.getRechargeLatest()
      this.getTradingLatest()
    },
    mounted () {

    }
  }
</script>


