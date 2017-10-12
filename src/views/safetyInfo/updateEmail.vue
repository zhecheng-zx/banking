/**
* Created by zhangxin on 2017/9/7.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg backPass">
        <div class="block">
          <div class="block-item">
            <h3 class="title">更换邮箱</h3>
          </div>
          <div class="box"></div>
          <div class="box">
            <el-form ref="form" :model="form" :rules="rules1" label-width="138px">
              <el-form-item label="登录密码：" prop="beforepw">
                <el-input v-model="form.beforepw" type="password" size="large"></el-input>
              </el-form-item>
              <el-form-item label="原邮箱：" prop="oldel">
                <el-input v-model="form.oldel" size="large"></el-input>
              </el-form-item>
              <el-form-item label="新邮箱：" prop="newel">
                <el-input v-model="form.newel" size="large"></el-input>
              </el-form-item>
              <el-form-item label="短信验证码：" prop="emailCode">
                <el-col :span="15">
                  <el-input v-model="form.emailCode" size="large"></el-input>
                </el-col>
                <el-col class="line" :span="1">&nbsp;</el-col>
                <el-col :span="8">
                  <el-button size="large" @click="sendSMS()" :disabled="disabled1">{{sendBtn1}}</el-button>
                </el-col>
              </el-form-item>
              <el-form-item label="图片验证码：" prop="vcode">
                <el-col :span="18">
                  <el-input v-model="form.vcode" size="large"></el-input>
                </el-col>
                <el-col class="line text-center" :span="1">&nbsp;</el-col>
                <el-col :span="4">
                  <img :src="imgUrl" @click="changeImg()" />
                </el-col>
              </el-form-item>
              <el-form-item label=" ">
                <el-button type="danger" size="large" @click="confirm('form')" v-loading.fullscreen.lock="fullscreenLoading">确定</el-button>
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
        timer1:180,
        disabled1: false,
        sendBtn1: '发送验证码',
        imgUrl: '',
        form: {
          beforepw: '',
          oldel: '',
          newel: '',
          emailCode: '',
          vcode: ''
        },
        rules1: {
          beforepw: [{
            required:true,message:'请输入登录密码',trigger:'blur'
          },{
            max:16,min:6,message:'请输入登录密码',trigger:'blur'
          }],
          oldel: [{
            required:true,message:'请输入原邮箱',trigger:'blur'
          },{
            type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'
          }],
          newel: [{
            required:true,message:'请输入新邮箱',trigger:'blur'
          },{
            type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'
          }],
          emailCode: [{
            required:true,message:'请输入邮箱验证码',trigger:'blur'
          },{
            max:6,min:6,message:'请输入正确的邮箱验证码',trigger:'blur'
          }],
          vcode: [{
            required:true,message:'请输入图片验证码',trigger:'blur'
          },{
            max:4,min:4,message:'请输入4位图片验证码',trigger:'blur'
          }]
        },
        fullscreenLoading:false
      }
    },
    components: {},
    methods: {
      changeImg(){
        let _this = this
        _this.imgUrl = ''
        setTimeout(function () {
          _this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+'&JSESSIONID='+_this.token
        },50)
      },
      confirm(formName){
        let _this = this,param = {}
        _this.fullscreenLoading = true;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            param = $.extend({},_this.form)
            param.beforepw = hex_md5(_this.form.beforepw)
            _this.$store.dispatch("EMAIL_CHANGE",{ param }).then((res)=>{
              if(res.success){
                _this.$router.push({path: '/safetyInfo' });
              }
              _this.fullscreenLoading = false;
              _this.$notify({
                title: '更换邮箱',
                message: res.msg,
                type: res.success?'success':'error'
              });
            })
          } else {
            param = {}
            return false;
          }
        });
      },
      sendSMS(){
        let _this = this,param = {}
        param.beforepw = hex_md5(_this.form.beforepw)
        param.oldml = _this.form.oldel
        param.newml = _this.form.newel
        _this.disabled1 = true
        if(!_this.form.beforepw||_this.form.beforepw.length<6||_this.form.beforepw.length>16||!param.oldml||!param.newml||!_this.form.vcode||_this.form.vcode.length!=4){
          _this.disabled1 = false
          _this.changeImg()
          _this.$notify({
            title: '提示信息',
            message: '请填写正确的信息！',
            type: 'warning'
          })
          return
        }
        setTimeout(()=>{
          _this.sendBtn1 = '发送验证码'
          _this.disabled1 = false
          clearInterval(timer)
        },180000)
        let timer = setInterval(()=>{
          _this.timer1--
          _this.sendBtn1 =_this.timer1+"s,后重新发送"
        },1000)
        _this.$store.dispatch("EMAIL_SEND2",{ param }).then((res)=>{
            console.log(res)
        })
      },
    },
    beforeMount () {
      this.token = getCookie("AUTHENTICATE_TOKEN")
      this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+'&JSESSIONID='+this.token
    }
  }
</script>


