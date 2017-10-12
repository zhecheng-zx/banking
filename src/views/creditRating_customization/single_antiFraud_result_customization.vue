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
            <p>需要查询数据为<span class="text-red">{{dataBase.result.count}}</span>条，已查询到<span class="text-red">{{dataBase.result.count}}</span>条，预付金额为<span class="text-red">{{new Number(dataBase.result.prepayment).toFixed(2)}}</span>元，实付费用为<span class="text-red">{{new Number(dataBase.result.totalAmount).toFixed(2)}}</span>元。</p>
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
              <h3>信用评估（详细版）<span class="text-red">{{new Number(dataBase.result.totalAmount).toFixed(2)}}元</span><span class="red-var">查询完成</span></h3>
              <h5>{{dataBase.result.scoreResult}}</h5>
              <div class="transition-bar-box">
                <div class="transition-bar-text posa" :style="'left:'+leftNum+'%'">
                  <div class="bar-text active" :class="'bar-text-'+currentItem">
                    <span>{{dataBase.result.score}}</span>
                  </div>
                </div>
                <div class="transition-bar-score">
                  <div class="bar-score bar-score-1 wp400">
                    <span class="score">0</span>
                  </div>
                  <div class="bar-score bar-score-3 wp78">
                    <span class="score">400</span>
                  </div>
                  <div class="bar-score bar-score-4 wp37">
                    <span class="score">478</span>
                  </div>
                  <div class="bar-score bar-score-5 wp85">
                    <span class="score">515</span>
                  </div>
                  <div class="bar-score bar-score-6 wp50">
                    <span class="score">600</span>
                  </div>
                  <div class="bar-score bar-score-7 wp50">
                    <span class="score">650</span>
                  </div>
                  <div class="bar-score bar-score-8 wp100">
                    <span class="score">700</span>
                  </div>
                  <div class="bar-score bar-score-9 wp100">
                    <span class="score">800</span>
                  </div>
                  <div class="bar-score bar-score-10 wp100">
                    <span class="score">900</span>
                    <span class="score">1000</span>
                  </div>
                </div>
                <div class="transition-bar-item">
                  <div class="bar-item bar-item-1 wp400"></div>
                  <div class="bar-item bar-item-3 wp78"></div>
                  <div class="bar-item bar-item-4 wp37"></div>
                  <div class="bar-item bar-item-5 wp85"></div>
                  <div class="bar-item bar-item-6 wp50"></div>
                  <div class="bar-item bar-item-7 wp50"></div>
                  <div class="bar-item bar-item-8 wp100"></div>
                  <div class="bar-item bar-item-9 wp100"></div>
                  <div class="bar-item bar-item-10 wp100"></div>
                </div>
                <div class="transition-bar-text">
                  <div class="bar-text bar-text-1 wp400">
                    <span>无信用</span>
                  </div>
                  <div class="bar-text bar-text-2 wp78">
                    <span>极差</span>
                  </div>
                  <div class="bar-text bar-text-3 wp37">
                    <span>很差</span>
                  </div>
                  <div class="bar-text bar-text-4 wp85">
                    <span>较差</span>
                  </div>
                  <div class="bar-text bar-text-5 wp50">
                    <span>欠佳</span>
                  </div>
                  <div class="bar-text bar-text-6 wp50">
                    <span>一般</span>
                  </div>
                  <div class="bar-text bar-text-7 wp100">
                    <span>较好</span>
                  </div>
                  <div class="bar-text bar-text-8 wp100">
                    <span>优良</span>
                  </div>
                  <div class="bar-text bar-text-9 wp100">
                    <span>极好</span>
                  </div>
                </div>
              </div>
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
        currentItem: 1,
        leftNum: 0,
        dataBase:{
          result:{
            prepayment:0,
            totalAmount:0
          },
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
        _this.$store.dispatch('ASSESS_DETAILS_RESULT',{
          param
        }).then((res,req)=>{
          if(res.success){
            _this.dataBase.result = res.data.result
            _this.dataBase.param = res.data.parm
            _this.leftNum = parseInt(res.data.result.score)/10
            if (res.data.result.score<400){
              _this.currentItem = 1
            } else
            if (res.data.result.score<478){
              _this.currentItem = 2
            } else
            if (res.data.result.score<515){
              _this.currentItem = 3
            } else
            if (res.data.result.score<600){
              _this.currentItem = 4
            } else
            if (res.data.result.score<650){
              _this.currentItem = 5
            } else
            if (res.data.result.score<700){
              _this.currentItem = 6
            } else
            if (res.data.result.score<800){
              _this.currentItem = 7
            } else
            if (res.data.result.score<900){
              _this.currentItem = 8
            } else {
              _this.currentItem = 9
            }
          }
        })
      }
    },
    beforeMount () {
      this.load();
    }
  }
</script>


