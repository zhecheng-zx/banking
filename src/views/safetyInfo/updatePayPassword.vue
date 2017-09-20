/**
* Created by zhangxin on 2017/9/7.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg backPass">
        <div class="block">
          <div class="block-item">
            <h3 class="title">修改支付密码</h3>
          </div>
          <div class="box">
            <el-form ref="form" :rules="rules" :model="form" label-width="138px">
              <el-form-item label="旧支付密码：" prop="beforepw">
                <el-input v-model="form.beforepw" type="password" size="large" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="新支付密码：" prop="newpw">
                <el-input v-model="form.newpw" type="password" size="large" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新支付密码：" prop="nowpw">
                <el-input v-model="form.nowpw" type="password" size="large" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="验证码：" prop="vcode">
                <el-col :span="16">
                  <el-input v-model="form.vcode" size="large" auto-complete="off"></el-input>
                </el-col>
                <el-col class="line text-center" :span="1">&nbsp;</el-col>
                <el-col :span="7">
                  <img :src="imgUrl" @click="changeImg()"/>
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.form.nowpw !== '') {
            this.$refs.form.validateField('nowpw');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.form.newpw) {
          callback(new Error('两次输入新密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          beforepw: '000000',
          newpw: '000000',
          nowpw: '000000',
          vcode: ''
        },
        rules: {
          beforepw: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度为6-16个字符', trigger: 'blur' }
          ],
          newpw: [
            { min: 6, max: 16, message: '长度为6-16个字符', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          nowpw: [
            { min: 6, max: 16, message: '两次输入新密码不一致', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
          vcode: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 4, max: 4, message: '长度为4个字符', trigger: 'blur' }
          ]
        },
        fullscreenLoading:false,
        token: '',
        imgUrl: ''
      }
    },
    components: {},
    methods: {
      confirm(formName){
        let _this = this
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.fullscreenLoading = true;
            _this.uodateLoginPassword()
          } else {
            return false;
          }
        })
      },
      uodateLoginPassword(){
        let _this  = this,param = {}
        param = $.extend({},_this.form)
        param.beforepw = hex_md5(param.beforepw)
        param.newpw = hex_md5(param.newpw)
        param.nowpw = hex_md5(param.nowpw)
        _this.$store.dispatch('SECURITY_CHANGEPAY',{ param }).then((res)=>{
          _this.fullscreenLoading = false
          if(res.success){
            _this.$router.push({path:'/safetyInfo'})
          }else{
            _this.changeImg()
          }
          _this.$notify({
            title: '修改支付密码',
            message: res.msg,
            type: res.success?'success':'error',
            duration: '2000'
          });
        })
      },
      changeImg(){
        let _this = this
        _this.imgUrl = ''
        setTimeout(function () {
          _this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+';JSESSIONID='+_this.token
        },50)
      }
    },
    beforeMount () {
      this.token = sessionStorage.getItem('token')
      this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+';JSESSIONID='+this.token
    }
  }
</script>


