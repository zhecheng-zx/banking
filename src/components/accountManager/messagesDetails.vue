/**
* Created by zhangxin on 2017/9/7.
*/
<template>
  <div>
    <div class="article-box">
      <h3>
        {{content.title}}
        <el-button type="text" class="pull-right" icon="delete"></el-button>
      </h3>
      <p class="publishDate">发送时间：2014-04-04  09:09:09</p>
      <div class="message-content">
        <p>共享单车正在受到红衫中国、创新工场、富士康、中国电信、华为、腾讯等青睐，即受到资本投资人与互联网大佬的双重追捧。其实，共享单车背后的金融套，或是套路、或是圈套，对于国家模糊的“无牌金融公司”、着实有办法赚钱的。</p>
        <p>赚钱法一 ：押金——本质是无利息吸储 高达200亿至300亿</p>
        <p>2017年元月13日，以摩拜单车为例，其创始人胡玮炜在极客公园创新大会GIF2017上承认，经过9个月的运营，目前摩拜单车的用户量已经超过1000万……</p>
        <p>此前，，摩拜单车也成功进入到9个大城市，累计市场投放60万辆单车。</p>
        <p>摩拜单车每个用户的押金299元，现在我们来做一个简单的算术题：</p>
        <p>用车人：1000万</p>
        <p>总押金：299元*1000万＝29.9亿元，平台可以获得29.9亿元的押金。</p>
        <p>车辆：100万（到目前，我们按其市场投放100万辆计算）</p>
        <p>平均每辆车：29.9亿元/100万＝2990元。</p>
        <p>第二赚钱法：金融公司的打法 可得纯利润约30亿</p>
        <p>每100亿的现金，可以轻松得到500亿的借款，借款按照每年3%-—10%的回报，200亿的现金可以得到1000亿的借款，成本重减去运营、利息，可得30亿上下的利润回报。</p>
        <p>赚钱第三法： 使用费与不退押金部分的回报 5亿元</p>
        <p>以摩拜单车充值优惠活动为例：充100送110，充50送30，充20送10。按用户平均充值50元计算，共充值：50元*1000万＝5亿元。</p>
        <p>赚钱第四法 账户信息 也是一种握在手里的无形资本</p>
        <p>1000万用户的账户信息、路线信息、住地址信息、得账户得信息者得天下，一切尽在后台掌控中、一切在共享单车的囊中使用……</p>
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
        msg: ''
      }
    },
    props:{
      content: Object
    },
    components: {},
    methods: {},
    mounted () {

    }
  }
</script>


