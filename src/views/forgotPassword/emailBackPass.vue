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
              <el-form ref="form" :model="form" :rules="rules1" label-width="120px">
                <el-form-item label="绑定邮箱：" prop="ml">
                  <el-input v-model="form.ml" size="larger"></el-input>
                </el-form-item>
                <el-form-item label="验证码：" prop="vcode">
                  <el-col :span="18">
                    <el-input v-model="form.vcode" size="larger"></el-input>
                  </el-col>
                  <el-col class="line text-center" :span="1">&nbsp;</el-col>
                  <el-col :span="4">
                    <img :src="imgUrl" @click="changeImg()" />
                  </el-col>
                </el-form-item>
                <el-form-item label="短信验证码：" prop="emailCode">
                  <el-col :span="15">
                    <el-input v-model="form.emailCode" size="larger"></el-input>
                  </el-col>
                  <el-col class="line" :span="1">&nbsp;</el-col>
                  <el-col :span="8">
                    <el-button size="large" @click="send()" :disabled="disabled1">{{sendBtn1}}</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item label=" ">
                  <el-button type="danger" size="large" @click="next('form')">下一步</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-if="step==2" class="box">
              <el-form ref="form2" :model="form2" :rules="rules2" label-width="140px">
                <el-form-item label="新登录密码：" prop="pw1">
                  <el-input v-model="form2.pw1" type="password" size="larger"></el-input>
                </el-form-item>
                <el-form-item label="确认新登录密码：" prop="pw2">
                  <el-input v-model="form2.pw2" type="password" size="larger"></el-input>
                </el-form-item>
                <el-form-item label=" ">
                  <el-button type="danger" size="large" @click="next('form2')">确定</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-if="step==3" class="box text-center">
              <i class="el-notification__icon el-icon-circle-check"></i>
              <h1 class="message">登录密码找回成功！</h1>
              <!--<p class="other_message">-->
                <!--<span class="text-red">5 </span>-->
                <!--秒后自动跳转到安全中心-->
              <!--</p>-->
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
  import {getCookie} from '../../util/cookie'
  export default{
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form2.pw2 !== '') {
            this.$refs.form2.validateField('pw2');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form2.pw1) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        step: 1,
        timer:null,
        timer1:180,
        disabled1: false,
        sendBtn1: '发送验证码',
        imgUrl: '',
        form: {
          ml: '',
          emailCode: '',
          vcode: ''
        },
        rules1: {
          ml: [{
            required:true,message:'请输入邮箱',trigger:'blur'
          },{
            type:"email",message:'请输入正确的邮箱',trigger:'blur'
          }],
          vcode: [{
            required:true,message:'请输入图片验证码',trigger:'blur'
          },{
            max:4,min:4,message:'长度为4位',trigger:'blur'
          }],
          emailCode: [{
            required:true,message:'请输入邮件验证码',trigger:'blur'
          },{
            max:6,min:6,message:'长度为6位',trigger:'blur'
          }]
        },
        form2: {
          ml:'',
          pw1: '',
          pw2: ''
        },
        rules2: {
          pw1: [
            { validator: validatePass, trigger: 'blur' },
            { min: 6, max: 16, message:'请输入6-16位新密码', trigger: 'blur' }
          ],
          pw2: [
            { validator: validatePass2, trigger: 'blur' },
            { min: 6, max: 16, message:'请输入6-16位新密码', trigger: 'blur' }
          ]
        }
      }
    },
    components: {},
    methods: {
      next(formName){
        let _this = this
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            if(_this.step == 1){
              _this.step1()
            }else{
              _this.step2()
            }
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
      send(){
        let _this = this,
          param = new Object()
        param.ml = _this.form.ml
        _this.disabled1 = true
        if(_this.form.ml.trim()==null||_this.form.ml.trim()==''||_this.form.ml.trim()==undefined||_this.form.vcode.length!=4){
          _this.disabled1 = false
          _this.$message({
            message: '请输入正确的邮箱和验证码',
            type: 'warning'
          });
          return
        }
        setTimeout(()=>{
          _this.sendBtn1 = '发送验证码'
          _this.disabled1 = false
          clearInterval(_this.timer)
        },180000)
        _this.timer = setInterval(()=>{
          _this.timer1--
          _this.sendBtn1 =_this.timer1+"s,后重新发送"
        },1000)
        _this.$store.dispatch("EMAIL_SENDBACK",{ param }).then((res)=>{
          _this.$notify({
            title: '提示',
            message: res.success?res.data:res.msg,
            type: res.success?"success":"error"
          });
        })
      },
      step1(){
        let _this = this,
          param = new Object()
        param = $.extend({},_this.form)
        _this.$store.dispatch("EMAIL_STEPBACK1",{ param }).then((res)=>{
          if(res.success){
            _this.form2.ml = param.ml
            _this.step = 2
            clearInterval(_this.timer)
            _this.timer1=180
            _this.disabled1= false
            _this.sendBtn1= '发送验证码'
          }else{
            _this.step = 1
            _this.$notify({
              title: '提示',
              message: res.success?res.data:res.msg,
              type: res.success?"success":"error"
            });
          }
        })
      },
      step2(){
        let _this = this,
          param = new Object()
        param = $.extend({},_this.form2)
        param.pw1 = hex_md5(param.pw1)
        param.pw2 = hex_md5(param.pw2)
        _this.$store.dispatch("EMAIL_STEPBACK2",{ param }).then((res)=>{
          if(res.success){
            _this.step = 3
          }else{
            _this.step = 1
            _this.$notify({
              title: '提示',
              message: res.success?res.data:res.msg,
              type: res.success?"success":"error"
            });
          }
        })
      }
    },
    beforeMount () {
      this.token = getCookie('AUTHENTICATE_TOKEN')
      this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+'&JSESSIONID='+this.token
    }
  }
</script>


