/**
* Created by zhangxin on 2017/9/7.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg backPass">
        <div class="block">
          <div class="block-item">
            <h3 class="title">更换手机号码</h3>
          </div>
          <div class="block-item">
            <div class="box">
              <div class="sui-steps steps-auto">
                <div class="wrap">
                  <div :class="step==1 ? 'current' : 'finished'">
                    <!--<div class="finished">-->
                    <label>
                      <span>1.验证原手机号码</span>
                    </label>
                    <i class="triangle-right-bg"></i>
                    <i class="triangle-right"></i>
                  </div>
                </div>
                <div class="wrap">
                  <div :class="step==3 ? 'finished' : step==2 ? 'current' : 'todo'">
                    <label>
                      <span>2.输入新手机号码</span>
                    </label>
                    <i class="triangle-right-bg"></i>
                    <i class="triangle-right"></i>
                  </div>
                </div>
                <div class="wrap">
                  <div :class="step==3 ? 'current' : 'todo'">
                    <label>
                      <span>3.完成</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="step==1" class="box">
              <el-form ref="form" :rules="rules1" :model="form" label-width="120px">
                <el-form-item label="原手机号码：" prop="mobile">
                  <el-input v-model="form.mobile" size="large"></el-input>
                </el-form-item>
                <el-form-item label="验证码：" prop="vcode">
                  <el-col :span="18">
                    <el-input v-model="form.vcode" size="large"></el-input>
                  </el-col>
                  <el-col class="line text-center" :span="1">&nbsp;</el-col>
                  <el-col :span="4">
                    <img :src="imgUrl" @click="changeImg()" />
                  </el-col>
                </el-form-item>
                <el-form-item label="短信验证码：" prop="smsCode">
                  <el-col :span="15">
                    <el-input v-model="form.smsCode" size="large"></el-input>
                  </el-col>
                  <el-col class="line" :span="1">&nbsp;</el-col>
                  <el-col :span="8">
                    <el-button size="large" @click="sendMessage()" :disabled="disabled1">{{sendBtn1}}</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item label=" ">
                  <el-button type="danger" size="large" @click="next('form')">下一步</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-if="step==2" class="box">
              <el-form ref="form2" :rules="rules1" :model="form2" label-width="140px">
                <el-form-item label="新手机号码：" prop="mobile">
                  <el-input v-model="form2.mobile" size="large"></el-input>
                </el-form-item>
                <el-form-item label="验证码：" prop="vcode">
                  <el-col :span="18">
                    <el-input v-model="form2.vcode" size="large"></el-input>
                  </el-col>
                  <el-col class="line text-center" :span="1">&nbsp;</el-col>
                  <el-col :span="4">
                    <img :src="imgUrl2" @click="changeImg2()" />
                  </el-col>
                </el-form-item>
                <el-form-item label="短信验证码：" prop="smsCode">
                  <el-col :span="15">
                    <el-input v-model="form2.smsCode" size="large"></el-input>
                  </el-col>
                  <el-col class="line" :span="1">&nbsp;</el-col>
                  <el-col :span="8">
                    <el-button size="large" @click="sendMessage2()" :disabled="disabled2">{{sendBtn2}}</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item label=" ">
                  <el-button type="danger" size="large" @click="next('form2')">下一步</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-if="step==3" class="box text-center">
              <i class="el-notification__icon el-icon-circle-check"></i>
              <h1 class="message">手机号码变更成功！</h1>
              <!--<p class="other_message">-->
                <!--<span class="text-red">5 </span>-->
                <!--秒后自动跳转到安全中心-->
              <!--</p>-->
              <div class="btn-box">
                <router-link class="btn btn-default btn-lg" to="/safetyInfo">立即前往安全中心</router-link>
              </div>
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
    width: auto;
    padding: 20px;
    &+.box {
      width: 600px;
      margin: 0 auto;
        .el-form-item__label{
          padding-top: 16px;
        }
        .el-input--large .el-input__inner {
          height: 42px;
        }
        .el-button {
          width: 100%;
          padding: 12px 15px;
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
  import {getCookie} from '../../util/cookie'
  export default{
    data () {
      return {
        step: 1,
        timer1:180,
        timer2:180,
        disabled1: false,
        sendBtn1: '发送验证码',
        disabled2: false,
        sendBtn2: '发送验证码',
        form: {
          mobile: '',
          vcode: '',
          smsCode: ''
        },
        rules1: {
          mobile: [{
            required:true,message:'请输入手机号码',trigger:'blur'
          },{
            max:11,min:11,message:'请输入正确的手机号码',trigger:'blur'
          }],
          vcode: [{
            required:true,message:'请输入图片验证码',trigger:'blur'
          },{
            max:4,min:4,message:'长度为4位',trigger:'blur'
          }],
          smsCode: [{
            required:true,message:'请输入短信验证码',trigger:'blur'
          },{
            max:6,min:6,message:'长度为6位',trigger:'blur'
          }]
        },
        form2: {
          mobile: '',
          vcode: '',
          smsCode: ''
        },
        token: '',
        imgUrl: '',
        imgUrl2: ''
      }
    },
    components: {},
    methods: {
      next(formName){
        let _this = this
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.step ==1){
              this.conform1()
            }
            if(this.step ==2){
              this.conform2()
            }
          } else {
            return false;
          }
        })
      },
      changeImg(){
        let _this = this
        _this.imgUrl = ''
        setTimeout(function () {
          _this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+'&JSESSIONID='+_this.token
        },50)
      },
      changeImg2(){
        let _this = this
        _this.imgUrl2 = ''
        setTimeout(function () {
          _this.imgUrl2 = '/api/security/captcha?t='+new Date().getTime()+'&JSESSIONID='+_this.token
        },50)
      },
      /*发送第一个短信验证码*/
      sendMessage(){
        let param = {},_this = this
        _this.disabled1 = true
        if(_this.form.mobile.length!=11||_this.form.vcode.length!=4){
          _this.disabled1 = false
          return
        }
        param.mobile = _this.form.mobile;
        setTimeout(()=>{
          _this.sendBtn1 = '发送验证码'
          _this.disabled1 = false
          clearInterval(timer)
        },180000)
        let timer = setInterval(()=>{
          _this.timer1--
          _this.sendBtn1 =_this.timer1+"s,后重新发送"
        },1000)
        _this.$store.dispatch("PHONE_SEND",{ param }).then((res,req)=>{
          _this.$notify({
            title: '提示',
            message: res.success?res.data:res.msg,
            type: res.success?"success":"error"
          });
        })
      },
      /*发送第二个短信验证码*/
      sendMessage2(){
        let param = {},_this = this
        _this.disabled2 = true
        if(_this.form2.mobile.length!=11||_this.form2.vcode.length!=4){
          _this.disabled2 = false
          return
        }
        param.mobile = _this.form2.mobile;
        setTimeout(()=>{
          _this.sendBtn2 = '发送验证码'
          _this.disabled2 = false
          clearInterval(timer2)
        },180000)
        let timer2 = setInterval(()=>{
          _this.timer2--
          _this.sendBtn2 =_this.timer2+"s,后重新发送"
        },1000)
        _this.$store.dispatch("PHONE_SEND1",{ param }).then((res,req)=>{
          _this.$notify({
            title: '提示',
            message: res.success?res.data:res.msg,
            type: res.success?"success":"error"
          });
        })
      },
      /**第一页下一步*/
      conform1(){
          let _this = this, param = {}
          param = $.extend({},_this.form)
          _this.$store.dispatch("PHONE_STEP1",{ param }).then((res,req)=>{
            if(res.success){
              _this.step = 2
              _this.changeImg2()
            }else{
              _this.step = 1
              _this.changeImg()
            }
            _this.$notify({
              title: '提示信息',
              message: res.msg,
              type: res.success?'success':'error',
              duration: '2000'
            })
          })
      },
      /**第一页下一步*/
      conform2(){
          let _this = this, param = {}
          param = $.extend({},_this.form2)
          _this.$store.dispatch("PHONE_STEP2",{ param }).then((res,req)=>{
            if(res.success){
              _this.step = 3
            }else{
              _this.step = 2
              _this.changeImg2()
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
    beforeMount(){
      this.token = getCookie('AUTHENTICATE_TOKEN')
      this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+'&JSESSIONID='+this.token
//      this.imgUrl2 = '/api/security/captcha?t='+new Date().getTime()+'&JSESSIONID='+this.token
    }
  }
</script>


