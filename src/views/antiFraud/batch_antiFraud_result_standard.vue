/**
* Created by zhangxin on 2017/9/4.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg">
        <h5 class="text-center">数据查询已提交，3-30分钟反馈查询结果，请耐心等待！</h5>
        <p class="text-center">本次批量查询实际查询数据是<span class="text-red">{{ dataCount }}</span>条，预付金额为<span class="text-red">{{ new Number(cost).toFixed(2) }}</span>元</p>
        <p class="text-center">具体查询所需金额以实际查询数据为准</p>
        <p class="text-center"> 倒计时 <span class="text-red times">{{ timeOut }}</span> 秒后自动跳转到用户中心-数据查询页面</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .white-bg{
    padding: 200px 0;
    h5{
      font-size: 21px;
      color:#333333;
      margin-bottom: 10px;
    }
    p{
      margin-bottom: 10px;
      font-size: 14px;
      color:#999999;
      &:last-child{
        margin-top: 30px;
      }
    }
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
        msg: '批量查询结果',
        dataCount: 0,
        cost: 0.00,
        timeOut: 5
      }
    },
    components: {},
    methods: {},
    beforeMount () {
      let _this = this
      _this.cost = sessionStorage.getItem("cost")
      _this.dataCount = sessionStorage.getItem("dataCount")
      let timer = setInterval(function () {
        _this.timeOut--
      },1000)
      setTimeout(function () {
          clearInterval(timer)
        _this.$router.replace({path:'/searchLog'})
      },5000)
    }
  }
</script>


