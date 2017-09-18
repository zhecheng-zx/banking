/**
* Created by zhangxin on 2017/8/30.
*/
<template>
  <div>
    <div class="container">
      <h1 class="text-center one-title">
        <img :src="displayedItems.top.icon" alt="icon" />
        {{ displayedItems.top.title }}
      </h1>
      <div class="row">
        <div v-for="item in displayedItems.top.content" :class="item.col">
          <div v-if="item.col != 'col-md-12'" :class="item.background">
            <h3>{{ item.name }}<i v-if="item.sub_title" :class="item.sub_icon"></i><em v-if="item.sub_title">({{ item.type }})</em></h3>
            <p>{{ item.profile }}</p>
            <div class="model-icon">
              <img :src="item.center_icon" alt="icon">
              <h3 v-if="item.sub_title" class="text-tag">({{ item.type }})</h3>
              <div v-if="item.crown" :class="item.crown_icon"></div>
              <div v-if="item.btn_flag" class="btn-box btn-big-box">
                <!--<router-link class="btn btn-danger" v-for="btn_item in item.btn_group" :to="btn_item.link">{{ btn_item.name }}</router-link>-->
                <button type="button" class="btn btn-danger" v-for="btn_item in item.btn_group" @click="clickType(btn_item)" v-loading.fullscreen.lock="fullscreenLoading">{{ btn_item.name }}</button>
              </div>
            </div>
          </div>
          <div v-else :class="item.background">
            <img :src="item.center_icon" alt="icon"/>
            <div class="describe">
              <h3>{{ item.name }}</h3>
              <p>{{ item.profile }}</p>
            </div>
            <div v-if="item.btn_flag" class="btn-box btn-big-box">
              <router-link class="btn btn-danger" v-for="btn_item in item.btn_group" :to="btn_item.link">{{ btn_item.name }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-center one-title">
        <img :src="displayedItems.bottom.icon" alt="icon" />
        {{ displayedItems.bottom.title }}
      </h1>
      <div class="row">
        <div class="col-md-3" v-for="item in displayedItems.bottom.content">
          <div class="thumbnail thumbnail-small">
            <img :src="item.icon" alt="icon" />
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade dialog" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">我的定制方案</h4>
          </div>
          <div class="modal-body">
            <el-form ref="form" :model="form" label-width="0">
              <el-form-item v-for="(item,index) in customData">
                <el-col :span="18">
                  <el-radio-group v-model="form.id">
                    <el-radio :label="item.id">{{item.name}}</el-radio>
                  </el-radio-group>
                </el-col>
                <el-col :span="6">
                  <el-button type="danger" class="isChecked" @click="setChecked(item,index)" :disabled="connive[index]">设置默认</el-button>
                  <!--<el-button type="danger" class="isChecked" v-else>设置默认</el-button>-->
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="text" size="large" @click="link_set()">设置新的方案>></el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="modal-footer">
            <!--<button type="button" class="btn btn-default btn-lg">关闭</button>-->
            <el-button type="danger" size="large" @click="confirm()">下一步</el-button>
            <el-button type="danger" size="large" @click="myModalDis()">取  消</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade dialog" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel2">我的定制方案</h4>
          </div>
          <div class="modal-body">
            <p class="text-center">您未设置定制方案，请先设置定制方案！</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger" size="large" @click="link_set()">立即设置</el-button>
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
    name: 'index-group',
    props: {
      type: String
    },
    data () {
      return {
        displayedItems: this.$store.getters.activeIndexPage,
        form: {
          id: ''
        },
        customData:[],
        connive:[],
        isSingle: true,
        fullscreenLoading: false
      }
    },
    components: {},
    computed: {

    },
    beforeMount () {
      if (this.$root._isMounted) {
        this.loadItems()
      }
    },
    methods: {
      loadItems () {
        this.$bar.start()
        this.$store.dispatch("INDEX_SETUP_FILE", {
          type: this.type
        }).then(() => {
          this.$router.replace(`/${this.type}`)
          this.displayedItems = this.$store.getters.activeIndexPage
          this.$bar.finish()
        })
      },
      clickType(param){
        /*判断是否是标准版查询，如果是直接跳转配置文件中的路由*/
        let _this = this;
        _this.fullscreenLoading = true
        if(param.mode == 'standard'){
          _this.$router.push({path: param.link})
          _this.fullscreenLoading = false
        }else{
          if(param.type == 'single'){
            _this.isSingle = true
          }else{
              _this.isSingle = false
          }
          if(param.link.indexOf('antiFraud') != -1){
            _this.$store.dispatch('ANTIFRAUD_CUSTOM',(res)=>{}).then((res,req)=>{
              if(res.success){
                _this.connive = []
                if(res.data.length>0){
                    let data = []
                    for(var i in res.data){
                      let obj = {}
                      obj.id = res.data[i].id
                      obj.name = res.data[i].name
                      if(res.data[i].connive == '是'){
                        obj.connive = true
                        _this.connive.push(true)
                        _this.form.id = res.data[i].id
                      }else{
                        obj.connive = false
                        _this.connive.push(false)
                      }
                      data.push(obj)
                    }
                  _this.customData = data
                  $("#myModal").modal('show');
                }else{
                  $("#myModal2").modal('show');
                }
              }else{
                _this.$notify({
                  title: '提示信息',
                  message: res.msg,
                  type: 'error',
                  duration: '1000'
                })
              }
              _this.fullscreenLoading = false
            }).catch((error)=>{
              _this.fullscreenLoading = false
              _this.$notify({
                title: '提示信息',
                message: error.message,
                type: 'error',
                duration: '1000'
              });
            })
          }
        }
      },
      setChecked(params,inx){
        let _this = this
        _this.form.id = params.id
        let param = this.form
        _this.connive[inx] = true
        _this.$store.dispatch('ANTIFRAUD_CUSTOM_SETUP',{ param }).then((res,req)=>{
          _this.connive.map((item,index) => {
              if(index == inx){
                _this.connive[index] = true
              }else{
                _this.connive[index] = false
              }
          })
          /*
          *
          *
          * 修改->反欺诈选择定制方案时，设置默认 按钮不随着变化的问题
          * 解决方案和form表单提交——>配合分页出现的问题 解决方案一致
          * 都是通过jQuery的 extend方法实现
          * */
          let connive3 = $.extend([],[],_this.connive)
          _this.connive = connive3
          this.$message({message:'默认方案，设置' + (res.success?'成功':'失败'),type:(res.success?'success':'error')});
        });
      },
      confirm(){
        this.myModalDis()
        sessionStorage.setItem('customTempId',this.form.id)
        if(this.isSingle){
          this.$router.push({path: '/antiFraud/customization_search'})
        }else{
          this.$router.push({path: '/antiFraud/customization_batch_search'})
        }
      },
      myModalDis(){
        $("#myModal").modal('hide');
        $("#myModal2").modal('hide');
      },
      link_set(){
        this.myModalDis()
        /*设置来源地址，添加定制方案完成时使用*/
        sessionStorage.setItem('from_page','/antiFraud')
        this.$router.push({path: '/antiFraud/custom_template'})
      },
      isCustomTrue(){

      },
      isCustomFalse(){

      }
    },
    mounted () {

    }
  }
</script>


