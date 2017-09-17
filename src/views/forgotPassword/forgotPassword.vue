/**
* Created by zhangxin on 2017/9/6.
*/
<template>
    <div>
      <div class="container">
        <div class="white-bg">
          <div class="block">
            <div class="block-item">
              <h3 class="text">找回登录密码</h3>
            </div>
            <div class="block-item">
              <p class="text-warning">基于对您账户及操作环境的检测，我们将提供以下方式供您选择</p>
              <div class="model-box">
                <el-row :gutter="40">
                  <el-col :span="8">
                    <div class="panel panel-dark">
                      <div class="panel-heading">
                        <h3 class="panel-title text-center">手机验证找回</h3>
                      </div>
                      <div class="panel-body">
                        <p class="profile">如果您的注册手机还在正常使用，请选择
                          此方式。</p>
                      </div>
                      <div class="panel-footer">
                        <div class="btn-box-pull">
                          <router-link class="btn btn-danger btn-lg" to="/phoneBackPass">立即找回</router-link>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="panel panel-dark">
                      <div class="panel-heading">
                        <h3 class="panel-title text-center">邮箱验证找回</h3>
                      </div>
                      <div class="panel-body">
                        <p class="profile">如果您的注册邮箱还在正常使用，请选择此方式。</p>
                      </div>
                      <div class="panel-footer">
                        <div class="btn-box-pull">
                          <router-link class="btn btn-danger btn-lg" to="/emailBackPass">立即找回</router-link>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="panel panel-dark">
                      <div class="panel-heading">
                        <h3 class="panel-title text-center">通过人工服务找回</h3>
                      </div>
                      <div class="panel-body">
                        <p class="profile">若您无法使用上述方法找回，请联系客服电话。</p>
                      </div>
                      <div class="panel-footer">
                        <div class="btn-box-pull">
                          <button class="btn btn-danger btn-danger-empty btn-lg" type="button">400-080-5055</button>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped lang="css">
  .white-bg {
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
  p.text-warning {
    padding-left: 40px;
  }
  .block .block-item:last-child {
    border-bottom: none;
  }
  .model-box {
    padding: 70px 40px 40px;
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
                msg: ''
            }
        },
        components: {},
        methods: {},
        mounted () {

        }
    }
</script>


