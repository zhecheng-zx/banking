/**
* Created by zhangxin on 2017/8/30.
*/
<template>
  <div>
    <div class="container">
      <h1 class="text-center one-title">
        <img src="/public/images/server.png" alt="icon" />
        产品与服务
      </h1>
      <div class="row">
        <div class="col-md-6">
          <div class="thumbnail background bg1">
            <h3>反欺诈</h3>
            <p>多维度交叉识别欺诈行为，助您提升反欺诈识别能力。</p>
            <div class="model-icon">
              <img src="/public/images/thumbnail_1.png" alt="icon">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="thumbnail background bg2">
            <h3>信用评估</h3>
            <p>信用判定，授信额度。</p>
            <div class="model-icon">
              <img src="/public/images/thumbnail_2.png" alt="icon">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="thumbnail background bg3">
            <h3>贷后风险监测</h3>
            <p>从放款开始检测客户还款情况，授信跟进</p>
            <div class="model-icon">
              <img src="/public/images/thumbnail_3.png" alt="icon">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="thumbnail background bg4">
            <h3>风险舆情</h3>
            <p>海量数据进行采集和智能分析，稳准狠快地把互联网读懂，读薄</p>
            <div class="model-icon">
              <img src="/public/images/thumbnail_4.png" alt="icon">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="thumbnail thumbnail-center  background bg5">
            <img src="/public/images/thumbnail_5.png" alt="icon"/>
            <div class="describe">
              <h3>精准营销</h3>
              <p>消费画像，针对现有客户提高活跃度，提升粘性</p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-center one-title">
        <img src="/public/images/top.png" alt="icon" />
        我们的优势
      </h1>
      <div class="row">
        <div class="col-md-3">
          <div class="thumbnail thumbnail-small">
            <img src="/public/images/thumbnail_6.png" alt="icon" />
            <p>具备庞大的数据库和优质的第三方数据源，数据覆盖全国</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="thumbnail thumbnail-small">
            <img src="/public/images/thumbnail_7.png" alt="icon" />
            <p>智能机器学习模型，结果精准且有特点，输出不仅包括量化分值，还包括描述性评判结果</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="thumbnail thumbnail-small">
            <img src="/public/images/thumbnail_8.png" alt="icon" />
            <p>数据响应毫秒级</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="thumbnail thumbnail-small">
            <img src="/public/images/thumbnail_9.png" alt="icon" />
            <p>深度了解金融行业需求及其痛点</p>
          </div>
        </div>
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
    name: 'index-group',
    props: {
        type: String
    },
    data () {
      return {
        transition: 'slide-right',
        displayedItems: this.$store.getters.activeIndexPage
      }
    },
    components: {},
    computed: {

    },
    beforeMount () {
      if (this.$root._isMounted) {
        this.loadItems()
      }
    },
    methods: {
        loadItems () {
          this.$bar.start()
          this.$store.dispatch("INDEX_SETUP_FILE", {
            type: this.type
          }).then(() => {
            this.$router.replace(`/${this.type}`)
            this.displayedItems = this.$store.getters.activeIndexPage
            console.log(this.displayedItems,"***");
            this.$bar.finish()
          })
        }
    },
    mounted () {

    }
  }
</script>


