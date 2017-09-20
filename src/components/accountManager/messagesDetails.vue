/**
* Created by zhangxin on 2017/9/7.
*/
<template>
  <div>
    <div class="article-box">
      <h3>
        {{content.message_header}}
        <el-button type="text" class="pull-right" icon="delete" @click="delMessage()"></el-button>
      </h3>
      <p class="publishDate">发送时间：{{ content.sendDate}}</p>
      <div class="message-content">
        <p>{{ content.message_content }}</p>
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
    methods: {
      delMessage(){
        let param = {},_this = this
        param.id = this.content.id
        _this.$store.dispatch("MESSAGE_DEL",{ param }).then((res,req) => {
          if(res.success){
            _this.$emit('hideMessage');
          }
          _this.$notify({
            title: '提示信息',
            message: res.msg,
            type: res.success?'success':'error',
            duration: '2000'
          })
        })
      }
    },
    mounted () {
    }
  }
</script>


