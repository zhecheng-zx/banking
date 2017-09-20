/**
* Created by zhangxin on 2017/9/4.
*/
<template>
  <div>
    <div class="container">
      <div class="white-bg">
        <h1 class="text-center">
          反欺诈（定制版）
        </h1>
        <div class="form-horizontal">
          <div class="form-group">
            <div class="col-md-5 col-md-offset-4">
              <div class="form-control-static text-red">提示：根据需求选择数据类型，定制自己的反欺诈服务！</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-4"><span class="text-red">*</span> 定制方案名称：</label>
            <div class="col-md-5">
              <input type="text" class="form-control" v-model="form.name">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-4"><span class="text-red">*</span> 数据类型：</label>
            <div class="col-md-5">
              <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="form.productIds" @change="handleCheckedCitiesChange" class="row" v-loading="loading" element-loading-text="拼命加载中">
                <div class="col-md-6" v-for="city in cities">
                  <el-checkbox :label="city.id" :key="city.id">{{city.productName}}</el-checkbox>
                </div>
              </el-checkbox-group>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-5 col-md-offset-4">
              <el-checkbox v-model="form.connive" true-label="是" false-label="否">设置为默认</el-checkbox>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-5 col-md-offset-4">
              <el-button type="danger" size="large" class="wp100" @click="addCustomTem()" v-loading.fullscreen.lock="fullscreenLoading">确定</el-button>
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
        checkAll: false,
        ids: this.$route.params.id,
        cities: [],
        loading:true,
        fullscreenLoading:false,
        productIds: [],
        form: {
          name: '',
          connive: '否',
          productIds: [],
        }
      }
    },
    components: {},
    methods: {
      handleCheckAllChange(event) {
        this.form.productIds = event.target.checked ? this.productIds : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
      },
      loadItem(){
        let _this = this
        _this.$store.dispatch('ANTIFRAUD_CUSTOM_GETPRODUCTS').then((res,req) => {
          if(res.success){
            _this.loading = false
            _this.cities = res.data
            let proIds = []
            res.data.map(function (item,index) {
              proIds.push(item.id)
            })
            _this.productIds = proIds
            if(_this.ids){
              _this.loadUpdateItem()
            }
          }
        }).catch((error)=>{
          _this.$notify({
            title: '提示信息',
            message: error.message,
            type: 'error',
            duration: '2000'
          })
        })
      },
      loadUpdateItem(){
        let _this = this,param = {}
        param.id = this.ids
        _this.$store.dispatch('ANTIFRAUD_CUSTOM_GET',{ param }).then((res,req) => {
          if(res.success){
            _this.form.name = res.data.name
            _this.form.connive = res.data.connive
            if(res.data.products.length == _this.productIds.length){
              _this.checkAll = true
            }
            res.data.products.map(function (item,index) {
              _this.form.productIds.push(item.id)
            })
            _this.loading = false
          }
        }).catch((error)=>{
          _this.$notify({
            title: '提示信息',
            message: error.message,
            type: 'error',
            duration: '2000'
          })
        })
      },
      addCustomTem(){
        let _this = this
        _this.fullscreenLoading = true
        let param = {}
        if(_this.ids){/*判断是修改还是新建*/
          param = $.extend({},_this.form)
          param.id = _this.ids
          _this.$store.dispatch('ANTIFRAUD_CUSTOM_UPDATE',{ param }).then((res,req) => {
            _this.$router.push({path: ''+sessionStorage.getItem('from_page')})
            _this.fullscreenLoading = false
            _this.$notify({
              title: '提示信息',
              message: res.msg,
              type: res.success ? 'success' : 'error',
              duration: '2000'
            });
          }).catch(function (error) {
            _this.fullscreenLoading = false
          })
        }else{
          param = _this.form
          _this.$store.dispatch('ANTIFRAUD_CUSTOM_ADD',{ param }).then((res,req) => {
            _this.$router.push({path: ''+sessionStorage.getItem('from_page')})
            _this.fullscreenLoading = false
            _this.$notify({
              title: '提示信息',
              message: res.msg,
              type: res.success ? 'success' : 'error',
              duration: '2000'
            });
          }).catch(function (error) {
            _this.fullscreenLoading = false
          })
        }
      }
    },
    beforeMount () {
      this.loadItem();
    }
  }
</script>


