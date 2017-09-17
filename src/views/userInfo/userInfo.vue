/**
* Created by zhangxin on 2017/9/4.
*/
<template>
  <div>
    <div class="container">
      <ul class="nav navbar-nav navbar-right nav-link">
        <li>
          <router-link to="/accountManager" class="">账户管理</router-link>
        </li>
        <!--<li>-->
          <!--<router-link to="/APIManager" class="">API管理</router-link>-->
        <!--</li>-->
        <li>
          <router-link to="/searchLog" class="">查询记录</router-link>
        </li>
        <li>
          <router-link to="/safetyInfo" class="">安全中心</router-link>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="nav-box pull-left" v-if="displayedItems.navFlag">
        <ul class="nav">
          <li class="nav-item" v-for="items in displayedItems.children">
            <router-link :to="items.link">{{ items.name }} <i> &gt; </i></router-link>
          </li>
        </ul>
      </div>
      <div class="page-content" :class="{ right: displayedItems.navFlag }">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .page-content{
    border:1px solid #ceced7;
    background-color: #ffffff;
  }
  .page-content.right{
    margin-left: 255px;
  }
</style>
<script>
  /**
   * import '../../assets/vendor/iCkeck-v1.0.2/js/icheck.min';
   * import "vue-style-loader!css-loader!sass-loader!../../assets/vendor/iCkeck-v1.0.2/css/skins/square/blue.css";
   * import loginButton from './components/loginButton.vue';
   */
  export default{
    name: 'user-info',
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
        this.$store.dispatch("USER_INFO_DATA", {
          type: this.type
        }).then(() => {
          this.$router.replace(`/${this.type}`)
          this.displayedItems = this.$store.getters.activeIndexPage
          this.$bar.finish()
        })
      }
    },
    mounted () {

    }
  }
</script>


