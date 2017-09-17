/**
* Created by zhangxin on 2017/9/7.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg backPass">
        <div class="block">
          <div class="block-item">
            <h3 class="title">找回登录密码</h3>
          </div>
          <div class="block-item">
            <div class="box">
              <div class="sui-steps steps-auto">
                <div class="wrap">
                  <div :class="step==1 ? 'current' : 'finished'">
                  <!--<div class="finished">-->
                    <label>
                      <span>1.验证身份</span>
                    </label>
                    <i class="triangle-right-bg"></i>
                    <i class="triangle-right"></i>
                  </div>
                </div>
                <div class="wrap">
                  <div :class="step==3 ? 'finished' : step==2 ? 'current' : 'todo'">
                    <label>
                      <span>2.重置登录密码</span>
                    </label>
                    <i class="triangle-right-bg"></i>
                    <i class="triangle-right"></i>
                  </div>
                </div>
                <div class="wrap">
                  <div :class="step==3 ? 'current' : 'todo'">
                    <label>
                      <span>3.找回成功</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="step==1" class="box">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="绑定邮箱：">
                  <el-input v-model="form.phone" size="larger"></el-input>
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
                <el-form-item label="短信验证码：">
                  <el-col :span="15">
                    <el-input v-model="form.messageNumber" size="larger"></el-input>
                  </el-col>
                  <el-col class="line" :span="1">&nbsp;</el-col>
                  <el-col :span="8">
                    <el-button size="large">发送验证码</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item label=" ">
                  <el-button type="danger" size="large" @click="next()">下一步</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-if="step==2" class="box">
              <el-form ref="form" :model="form2" label-width="140px">
                <el-form-item label="新登录密码：">
                  <el-input v-model="form2.password" type="password" size="larger"></el-input>
                </el-form-item>
                <el-form-item label="确认新登录密码：">
                  <el-input v-model="form2.confirmPassword" type="password" size="larger"></el-input>
                </el-form-item>
                <el-form-item label=" ">
                  <el-button type="danger" size="large" @click="next()">确定</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-if="step==3" class="box text-center">
              <i class="el-notification__icon el-icon-circle-check"></i>
              <h1 class="message">登录密码找回成功！</h1>
              <p class="other_message">
                <span class="text-red">5 </span>
                秒后自动跳转到安全中心
              </p>
              <div class="btn-box">
                <router-link class="btn btn-default btn-lg" to="/login">现在去登录</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
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

  +
  .box {
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
        step: 1,
        form: {
          phone: '',
          yzm: '',
          messageNumber: ''
        },
        form2: {
          password: '',
          confirmPassword: ''
        }
      }
    },
    components: {},
    methods: {
      next(){
        if(this.step == 3){
            alert("修改完成")
            this.step = 1
            return
        }
        this.step = this.step+1
      }
    },
    mounted () {

    }
  }
</script>


