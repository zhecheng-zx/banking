/**
* Created by zhangxin on 2017/9/4.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg">
        <h1 class="text-center">
          批量查询
        </h1>
        <h2 class="text-center">类型：反欺诈（定制版）</h2>
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-md-4 control-label">请下载模版：</label>
            <div class="col-md-5">
              <!--<el-button type="danger" :loading="btn_loading">下载模版{{fileName}}</el-button>-->
              <router-link :to="'/api/antifraud/downTemplate?customSolutionId='+customSolutionId+'&JSESSIONID='+Authorization" target="_blank" class="el-button el-button--danger" :loading="btn_loading">下载模版</router-link>
              <span class="text-red">请先下载模板，按模板要求填写需要查询的数据</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">导入模版：</label>
            <div class="col-md-5">
              <el-upload
                :headers="headers"
                :data="params"
                name="files"
                action="/api/excel/import"
                :multiple="multiple"
                :on-success="changePrices"
                :on-change="handleChange"
                accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                :file-list="fileList">
                <el-button type="danger">批量查询导入Excel</el-button>
                <div slot="tip" class="el-upload__tip">只能上传.xls/.xlsx文件</div>
              </el-upload>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">本次查询所需费用：</label>
            <div class="form-control-static col-md-5">
              <span class="text-red">{{ cost }}</span>元
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label"><span class="text-red">*</span>支付密码：</label>
            <div class="col-md-5">
              <input class="form-control" autocomplete="off" v-model="param.payPassword" type="password" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-5 col-md-offset-4">
              <label>
                <input type="checkbox" />
                我已阅读并同意 <a href="/" target="_blank"> 《用户授权协议》</a>
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-5 col-md-offset-4">
              <!--<router-link to="import_result" class="btn btn-danger" type="button">确定</router-link>-->
              <el-button type="danger" size="large" class="wp100" @click="searchResult()" v-loading.fullscreen.lock="fullscreenLoading">确定</el-button>
            </div>
          </div>
        </div>
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
        msg: '',
        fileList:[],
        btn_loading: true,
        fileName: 'javascript:void(0);',
        params: {
          solutionId: 7,
        },
        multiple: false,
        headers:{
          "Authorization":''
        },
        cost: 0,
        param: {
          tradeId: '',
          payPassword: ''
        },
        Authorization: '',
        customSolutionId: '',
        fullscreenLoading:false
      }
    },
    components: {},
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-1);
      },
      changePrices(response){
        if(response.success){
          this.cost = response.data.cost
          this.param.tradeId = response.data.tradeId
          sessionStorage.setItem("cost",response.data.cost)
          sessionStorage.setItem("dataCount",response.data.dataCount)
        }
      },
      searchResult(){
        let param = {}
        let _this = this
        _this.fullscreenLoading = true
        param.customSolutionId = parseInt(sessionStorage.getItem("customTempId"))
        param.tradeId = _this.param.tradeId
        param.payPassword = hex_md5(_this.param.payPassword)
        _this.$store.dispatch("ANTIFRAUD_CQUERYTWO",{ param }).then((res,req)=>{
          if(res.success){
            sessionStorage.setItem('_import_tradeId',res.data)
            _this.$router.push({path: "customization_batch_result"})
          }
          _this.fullscreenLoading = false
          _this.$notify({
            title: '提示信息',
            message: res.msg,
            type: res.success ? 'success' : 'error',
            duration: '1000'
          })
        }).catch((error)=>{
        _this.fullscreenLoading = false
        })
      }
    },
    beforeMount () {
      let token = sessionStorage.getItem('token')
      this.headers['Authorization'] = token
      this.Authorization = token
      let customTempId = sessionStorage.getItem("customTempId")
      this.customSolutionId = customTempId
    }
  }
</script>


