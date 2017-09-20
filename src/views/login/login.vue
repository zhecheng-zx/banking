/**
* Created by zhangxin on 2017/9/6.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg login">
        <el-row :gutter="30">
          <el-col :span="12">
            <div class="left-banner">
              <div class="pull-left">
                <img src="/public/images/login_line.png" />
              </div>
              <div class="">
                <p>一座以大数据采集整合，数据清洗、挖掘，建模的全流程化服务，高质量的数据为能 源，监督机器学习算法为机械设备，行业专家的经验和业界的口碑为质量管理体系的综合性的数据基地。</p>
              </div>
            </div>
            <div class="left-banner">
              <div class="pull-left">
                <img src="/public/images/login_pc.png" />
              </div>
              <div class="">
                <p>高效的特征工程提取特征值，利用半监督机器学习算法和监督机器学习算法，对数据深度挖掘，再与专家经验相融合，力求精准，高效。</p>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="login-box">
              <h2 class="title">会员登录</h2>
              <el-form :model="param" :rules="rules2" ref="param" label-width="0" class="demo-ruleForm">
                <el-form-item prop="username">
                  <el-input placeholder="输入用户名／手机号" size="large" v-model="param.username" auto-complete="off">
                    <template slot="prepend"><span class="fa fa-user-o"></span></template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" placeholder="输入密码" size="large" v-model="param.password" auto-complete="off">
                    <template slot="prepend"><span class="fa fa-key"></span></template>
                  </el-input>
                </el-form-item>
                <el-row :gutter="0">
                  <el-col :span="12">
                    <el-form-item prop="captcha">
                      <el-input type="text" placeholder="输入验证码" size="large" v-model="param.captcha" auto-complete="off">
                        <template slot="prepend"><span class="fa fa-check-square-o"></span></template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="num-box">
                      <img :src="imgUrl" />
                      <el-button type="text" @click="changeImg()">换一张</el-button>
                    </div>
                  </el-col>
                </el-row>
                <el-form-item class="mb0">
                  <router-link to="/forgotPassword">忘记密码</router-link>
                </el-form-item>
                <el-form-item>
                  <el-button type="danger" size="large" @click="submitForm('param')" v-loading.fullscreen.lock="fullscreenLoading">立即登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .login{
    padding-left: 80px;
    padding-right: 80px;
    border: 1px solid #ffc1c6;
    background-color: #f5eef2;
    .left-banner{
      padding: 50px 0 65px;
      &:last-child{
        border-top: 1px solid #f3dee3;
       }
       p{
         color:#7f7f7f;
         line-height: 1.7;
       }
    }
    .login-box{
      padding: 30px 50px 70px;
      border:2px solid #e5e5e5;
      box-shadow: 0 0 13px rgba(187,0,7,.07);
      background-color: #fff;
      .title{
        font-size: 22px;
        text-align: center;
        margin-bottom: 60px;
      }
      .mb0{
        margin-bottom: 0;
        a{
          font-size: 14px;
          color:#565656;
          &:hover{
            color:#777;
           }
          &:focus{
            color:#565656;
           }
        }
      }
      .el-input-group__prepend{
        padding-left: 20px;
        padding-right: 20px;
      }
      .el-button--danger{
        width: 100%;
        background-color: #d93b43;
      }
      .el-input--large .el-input__inner{
        height:48px;
      }
      .num-box{
        padding-left: 10px;
        .el-button--text{
          margin-left: 20px;
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
  import 'font-awesome/css/font-awesome.css'
  export default{
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.pass !== '') {
            this.$refs.ruleForm2.validateField('pass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        param: {
          username: '',
          password: '',
          captcha: ''
        },
        rules2: {
          password: [
            { required: true, message: '密码不能为空！', trigger: 'blur' },
            { max: 16, min: 6, message: '请输入6-16位密码' }
          ],
          username: [
            { required: true, message: '用户名不能为空！', trigger: 'blur' }
          ],
          captcha: [
            { required: true, message: '验证码不能为空！', trigger: 'blur' },
            { max: 4, min: 4, message: '验证码长度为4位！' }
          ]
        },
        loginStatus: false,
        imgUrl: '',
        imgToken: '',
        fullscreenLoading:false
      };
    },
    computed: {
      isLogin(){
        return this.loginStatus
      }
    },
    beforeMount () {
      this.load()
      this.getToken()
    },
    watch: {
      'loginStatus':function(to,from){
        if(to) {
          this.$store.dispatch("MANAGER_LOGIN_STATE", {
            loginStatus: to
          }).then(() => {
            this.$router.replace({path: '/index'})
          })
        }
      }
    },
    methods: {
      changeImg() {
        this.imgUrl = ''
        setTimeout(() => {
          this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+'&JSESSIONID='+this.imgToken
        },100)
      },
      submitForm(formName) {
        let _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.fullscreenLoading = true;
            let param ={}
            param.username = _this.param.username
            param.password = hex_md5(_this.param.password)
            param.captcha = _this.param.captcha
            localStorage.setItem("userName",param.username)
            _this.$store.dispatch('LOGIN',{
              param
            }).then((res,req)=>{
              if(res.success){
                sessionStorage.setItem("token",res.data);
                _this.loginStatus = true
                _this.load()
                sessionStorage.removeItem('imgToken')
              }else{
                _this.changeImg()
              }
              _this.$notify({
                title: '提示信息',
                message: res.msg,
                type: res.success?'success':'error',
                duration: '2000'
              });
              _this.fullscreenLoading = false;
            }).catch((error)=>{
              _this.fullscreenLoading = false;
              _this.$notify({
                title: '提示信息',
                message: '网络异常，请刷新后再试！',
                type: 'error',
                duration: '2000'
              });
            })
          } else {
            _this.fullscreenLoading = false;
            _this.changeImg()
            _this.loginStatus = false
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      load(){
        this.$bar.start()
        this.$store.dispatch("MANAGER_LOGIN_STATE", {
          loginStatus: this.loginStatus
        }).then(() => {
          this.$bar.finish()
        })
      },
      getToken(){
        this.$store.dispatch("AUTHENTICATE_TOKEN").then((res)=>{
          this.imgToken = sessionStorage.getItem('imgToken')
          this.imgUrl = '/api/security/captcha?t='+new Date().getTime()+';JSESSIONID='+this.imgToken
        })
      }
    }
  }
</script>


