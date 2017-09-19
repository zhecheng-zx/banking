/**
* Created by zhangxin on 2017/9/4.
*/
<template>
  <div>
    <div class="container">
      <div class="page-wrapper">
        <div class="panel panel-result">
          <div class="panel-heading">
            <h2 class="panel-title">查询结果
              <!--<a href="javascript:void(0);" target="_blank" class="pull-right export">-->
                <!--<img src="/public/images/export_icon.png" />导出excel-->
              <!--</a>-->
            </h2>
          </div>
          <div class="panel-body">
            <p>需要查询数据为<span class="text-red">{{dataBase.result.count}}</span>条，已查询到<span class="text-red">{{dataBase.result.count}}</span>条，预付金额为<span class="text-red">{{dataBase.result.prepayment}}</span>元，实付费用为<span class="text-red">{{dataBase.result.totalAmount}}</span>元。</p>
            <div class="table-box">
              <h3>输入信息</h3>
              <table class="table table-bordered table-striped text-center">
                <tbody>
                  <tr v-for="(item,index) in dataBase.param">
                    <td>{{index}}</td>
                    <td>{{item}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-box">
              <h3>信用评估（详细版）<span class="text-red">{{dataBase.result.totalAmount}}元</span><span class="red-var">查询完成</span></h3>
              <table class="table table-bordered table-striped text-center">
                <tbody>
                <tr>
                  <td>类型</td>
                  <td>结果</td>
                </tr>
                <tr>
                  <td>信用评估</td>
                  <td><span class="text-red">{{dataBase.result.scoreResult}}</span></td>
                </tr>
                </tbody>
              </table>
            </div>
            <!--<p class="warning-text text-red">-->
              <!--<img src="/public/images/warn_icon.png" />-->
              <!--{{dataBase.result.scoreResult}}-->
            <!--</p>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  /*page-wrapper 搜索结果页面*/
  .wrapper{
    background-color: #fff;
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
        msg: '查询结果',
        ANTIFRAUD_SQUERYONE_tradeId: '',
        dataBase:{
          result:{},
          param: {}
        }
      }
    },
    components: {},
    methods: {
      load(){
        let tradeId = '';
        tradeId = sessionStorage.getItem('ANTIFRAUD_SQUERYONE_tradeId')
        let param = {}
        param.tradeId = tradeId
        let _this = this
        _this.$store.dispatch('ANTIFRAUD_QUERYRESULT',{
          param
          }).then((res,req)=>{
            if(res.success){
              _this.dataBase.result = res.data.result
              _this.dataBase.param = res.data.parm
            }
          _this.$notify({
            title: '提示信息',
            message: res.msg,
            type: res.success ? 'success' : 'error',
            duration: '1000'
          });
        })
      }
    },
    mounted () {
      this.load();
    }
  }
</script>


