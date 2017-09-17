/**
* Created by zhangxin on 2017/9/7.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg backPass">
        <div class="block">
          <div class="block-item">
            <h3 class="title">绑定邮箱</h3>
          </div>
          <div class="box"></div>
          <div class="box">
            <el-form ref="form" :model="form" label-width="138px">
              <el-form-item label="邮箱：">
                <el-input v-model="form.oldPassword" type="password" size="larger"></el-input>
              </el-form-item>
              <el-form-item label="短信验证码：">
                <el-col :span="15">
                  <el-input v-model="form.messageNumber" size="larger"></el-input>
                </el-col>
                <el-col class="line" :span="1">&nbsp;</el-col>
                <el-col :span="8">
                  <el-button size="large">发送验证码</el-button>
                </el-col>
              </el-form-item>
              <el-form-item label="验证码：">
                <el-col :span="18">
                  <el-input v-model="form.yzm" size="larger"></el-input>
                </el-col>
                <el-col class="line text-center" :span="1">&nbsp;</el-col>
                <el-col :span="4">
                  <img src="/public/images/yzm.png" />
                </el-col>
              </el-form-item>
              <el-form-item label=" ">
                <el-button type="danger" size="large" @click="confirm()" v-loading.fullscreen.lock="fullscreenLoading">确定</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style lang="scss" scoped>
  .backPass {

  &.white-bg {
     padding-top: 0;
     border: 1px solid #ceced7;
   }

  .block-item {
    padding-left: 20px;
    padding-right: 20px;
  }

  .block .block-item {
    border-right: 0;
  }

  .block .block-item:last-child {
    border-bottom: none;
  }

  .box {
    padding: 20px;
    width: 600px;
    margin: 0 auto;
  .el-form-item__label{
    padding-top: 16px;
  }
  .el-input--larger .el-input__inner {
    height: 48px;
  }

  .el-button {
    width: 100%;
    padding: 15px 15px;
  }
  .el-icon-circle-check{
    float: none;
    width: 80px;
    height: 80px;
    color: #66c232;
    font-size: 80px;
    border-radius: 40px;
    -webkit-box-shadow: inset 0 0 27px rgba(102,194,50,.45);
    -moz-box-shadow: inset 0 0 27px rgba(102,194,50,.45);
    box-shadow: inset 0 0 27px rgba(102,194,50,.45);
    box-shadow: 0 0 27px rgba(102,194,50,.45);
  }
  .message{
    margin-top: 35px;
    font-size: 36px;
  }
  .other_message{
    margin-top: 35px;
    font-size: 16px;
    color:#a5a5a5;
  }
  .btn-box{
    margin-top:45px;
  >.el-button{
     width: 200px;
   }
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
        form: {
          oldPassword: '',
          newPassword: '',
          yzm: ''
        },
        checkNewPassword: '',
        fullscreenLoading:false
      }
    },
    components: {},
    methods: {
      confirm(){
        let _this = this
        _this.fullscreenLoading = true;
        setTimeout(() => {
          _this.fullscreenLoading = false;
          _this.$router.push({path: '/safetyInfo' });
          _this.open()
        }, 2000);
      },
      open() {
        this.$notify({
          title: '绑定邮箱',
          message: '恭喜您，邮箱绑定成功！',
          type: 'success'
        });
      },
    },
    mounted () {

    }
  }
</script>


