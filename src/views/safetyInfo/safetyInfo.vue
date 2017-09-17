/**
* Created by zhangxin on 2017/9/5.
*/
<template>
  <div>
    <div class="block">
      <div class="block-item">
        <h3 class="text">安全中心</h3>
      </div>
      <div class="block-item last-table">
        <el-table
          :stripe="true"
          :data="tableData"
          :show-header="false"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="type"
            label="类型"
            width="120">
          </el-table-column>
          <el-table-column
            align="left"
            prop="message"
            label="提示信息"
            width="">
          </el-table-column>
          <el-table-column
            align="center"
            prop="status"
            label="状态"
            width="100">
          </el-table-column>
          <el-table-column
            align="center"
            prop="handle"
            width="100"
            label="操作">
            <template scope="scope">
              <router-link :to="scope.row.link">{{scope.row.handle}}</router-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
  .block .block-item{
    border-right: none;
  }
  .block .last-table{
    height: 500px;
  }
  .block-item .text{
    padding-left: 15px;
  }
  .block-item.last-table{
    border:none;
    padding: 0;
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
        tableData: [{
          type: '登录密码',
          message: '保障账户安全，建议密码由6-16位数字、字母、下划线中的2种组合',
          status: '已设置',
          handle: '修改',
          link: 'updateLoginPassword'
        },{
          type: '支付密码',
          message: '保障账户安全，建议密码由6-16位数字、字母、下划线中的2种组合',
          status: '已设置',
          handle: '修改',
          link: 'updatePayPassword'
        },{
          type: '绑定手机',
          message: '您绑定的手机号码：152****9801',
          status: '已绑定',
          handle: '更换',
          link: 'updatePhonePassword'
        },{
          type: '绑定邮箱',
          message: '邮件可以接收账户通知，并及时了账户信息变动情况',
          status: '未绑定',
          handle: '立即绑定',
          link: 'bindEmail',
//          link: 'updateEmail'
        },{
          type: '绑定邮箱',
          message: '邮件可以接收账户通知，并及时了账户信息变动情况',
          status: '未绑定',
          handle: '更换',
//          link: 'bindEmail',
          link: 'updateEmail'
        }]
      }
    },
    components: {},
    methods: {
    },
    mounted () {

    }
  }
</script>
