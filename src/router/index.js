import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import {getCookie,delCookie,setCookie} from "../util/cookie"

Vue.use(Router)

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
// const ItemView = () => import('../views/ItemView.vue')
const CreateIndexView = obj => () => import('../views/CreateIndexView').then(m => m.default(obj))
const CreateUserInfoView = obj => () => import('../views/CreateUserInfoView').then(m => m.default(obj))
/***************************
 *
 * 反欺诈开始
 *
 *
 * ********/
/*标准版=>反欺诈单一查询*/
const single_antiFraud_standard = () => import('../views/antiFraud/single_antiFraud_standard.vue')
const single_antiFraud_result_standard = () => import('../views/antiFraud/single_antiFraud_result_standard.vue')
/*标准版=>反欺诈批量查询*/
const batch_antiFraud_standard = () => import('../views/antiFraud/batch_antiFraud_standard.vue')
const batch_antiFraud_result_standard = () => import('../views/antiFraud/batch_antiFraud_result_standard.vue')

/*定制版=>反欺诈单一查询*/
const single_antiFraud_customization = () => import('../views/antiFraud_customization/single_antiFraud_customization.vue')
const single_antiFraud_result_customization = () => import('../views/antiFraud_customization/single_antiFraud_result_customization.vue')
/*定制版=>反欺诈批量查询*/
const batch_antiFraud_customization = () => import('../views/antiFraud_customization/batch_antiFraud_customization.vue')
const batch_antiFraud_result_customization = () => import('../views/antiFraud_customization/batch_antiFraud_result_customization.vue')
/*定制版=>反欺诈添加方案*/
const select_type = () => import('../views/antiFraud_customization/select_type.vue')
/***************************
 *
 * 信用评估 开始
 *
 *
 * ********/
/*标准版=>信用评估单一查询*/
const single_creditRating_standard = () => import('../views/creditRating/single_antiFraud_standard.vue')
const single_creditRating_result_standard = () => import('../views/creditRating/single_antiFraud_result_standard.vue')
/*标准版=>信用评估批量查询*/
const batch_creditRating_standard = () => import('../views/creditRating/batch_antiFraud_standard.vue')
const batch_creditRating_result_standard = () => import('../views/creditRating/batch_antiFraud_result_standard.vue')

/*定制版=>信用评估单一查询*/
const single_creditRating_customization = () => import('../views/creditRating_customization/single_antiFraud_customization.vue')
const single_creditRating_result_customization = () => import('../views/creditRating_customization/single_antiFraud_result_customization.vue')
/*定制版=>信用评估批量查询*/
const batch_creditRating_customization = () => import('../views/creditRating_customization/batch_antiFraud_customization.vue')
const batch_creditRating_result_customization = () => import('../views/creditRating_customization/batch_antiFraud_result_customization.vue')

/**
 *
 * 贷后风险监测 开始
 *
 *
 */
/*贷后风险监测  批量查询*/
const batch_postLoan_standard = () => import('../views/postLoan/batch_antiFraud_standard.vue')
const batch_postLoan_result_standard = () => import('../views/postLoan/batch_antiFraud_result_standard.vue')

/**
 *
 * 贷后风险监测 开始
 *
 *
 */
/*贷后风险监测  批量查询*/
const batch_precisionMarketing_standard = () => import('../views/precisionMarketing/batch_antiFraud_standard.vue')
const batch_precisionMarketing_result_standard = () => import('../views/precisionMarketing/batch_antiFraud_result_standard.vue')

const userInfo = () => import('../views/userInfo/userInfo.vue')
const accountOverview = () => import('../components/accountManager/accountOverview.vue')
const accountRecharge = () => import('../components/accountManager/accountRecharge.vue')
const rechargeLog = () => import('../components/accountManager/rechargeLog.vue')
const dealLog = () => import('../components/accountManager/dealLog.vue')
const myScheme = () => import('../components/accountManager/myScheme.vue')
const messagesInfo = () => import('../components/accountManager/messagesInfo.vue')
const singleSearch = () => import('../components/searchLog/singleSearch.vue')
const batchSearch = () => import('../components/searchLog/batchSearch.vue')
const safetyInfo = () => import('../views/safetyInfo/safetyInfo.vue')
const login = () => import('../views/login/login.vue')
const forgotPassword = () => import('../views/forgotPassword/forgotPassword.vue')
const phoneBackPass = () => import('../views/forgotPassword/phoneBackPass.vue')
const emailBackPass = () => import('../views/forgotPassword/emailBackPass.vue')

const updateLoginPassword = () => import('../views/safetyInfo/updateLoginPassword.vue')
const updatePayPassword = () => import('../views/safetyInfo/updatePayPassword.vue')
const updatePhonePassword = () => import('../views/safetyInfo/updatePhonePassword.vue')
const bindEmail = () => import('../views/safetyInfo/bindEmail.vue')
const updateEmail = () => import('../views/safetyInfo/updateEmail.vue')
const userAgreement =() => import('../views/userAgreement.vue')
export function createRouter () {
  let routes = {
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/index', component: CreateIndexView({ 'id': 'index', 'title': '首页'})},
      { path: '/antiFraud', component: CreateIndexView({ 'id': 'antiFraud', 'title': '反欺诈'})},
      { path: '/creditRating', component: CreateIndexView({ 'id': 'creditRating', 'title': '信用评估'})},
      { path: '/postLoan', component: CreateIndexView({ 'id': 'postLoan', 'title': '贷后风险监测'})},
      { path: '/riskOpinion', component: CreateIndexView({ 'id': 'riskOpinion', 'title': '风险舆情'})},
      { path: '/precisionMarketing', component: CreateIndexView({ 'id': 'precisionMarketing', 'title': '精准营销'})},
      {
        path: '/antiFraud/custom_template/:id(\\d+)?',/*方案选择类型*/
        component: select_type
      },
      {
        path: '/antiFraud/search',/*单一查询*/
        component: single_antiFraud_standard
      },
      {
        path: '/antiFraud/result',/*单一查询结果*/
        component: single_antiFraud_result_standard
      },{
        path: '/antiFraud/batch_search',/*批量查询*/
        component: batch_antiFraud_standard
      },{
        path: '/antiFraud/batch_result',/*批量查询结果*/
        component: batch_antiFraud_result_standard
      },
      {
        path: '/antiFraud/customization_search',/*定制单一查询*/
        component: single_antiFraud_customization
      },{
        path: '/antiFraud/customization_result',/*定制单一查询结果*/
        component: single_antiFraud_result_customization
      },{
        path: '/antiFraud/customization_batch_search',/*定制批量查询*/
        component: batch_antiFraud_customization
      },{
        path: '/antiFraud/customization_batch_result',/*定制批量查询结果*/
        component: batch_antiFraud_result_customization
      },
      /***信用评估的 开始***/
      {
        path: '/creditRating/search',/*信用评估单一查询*/
        component: single_creditRating_standard
      },
      {
        path: '/creditRating/result',/*信用评估单一查询结果*/
        component: single_creditRating_result_standard
      },{
        path: '/creditRating/batch_search',/*信用评估批量查询*/
        component: batch_creditRating_standard
      },{
        path: '/creditRating/batch_result',/*信用评估批量查询结果*/
        component: batch_creditRating_result_standard
      },
      {
        path: '/creditRating/customization_search',/*信用评估详细版单一查询*/
        component: single_creditRating_customization
      },{
        path: '/creditRating/customization_result',/*信用评估详细版单一查询结果*/
        component: single_creditRating_result_customization
      },{
        path: '/creditRating/customization_batch_search',/*信用评估详细版批量查询*/
        component: batch_creditRating_customization
      },{
        path: '/creditRating/customization_batch_result',/*信用评估详细版批量查询结果*/
        component: batch_creditRating_result_customization
      },
      /***贷后风险监测的 开始***/
      {
        path: '/postLoan/batch_search',/*信用评估批量查询*/
        component: batch_postLoan_standard
      },{
        path: '/postLoan/batch_result',/*信用评估批量查询结果*/
        component: batch_postLoan_result_standard
      },
      /************精准营销的开始****************/
      {
        path: '/precisionMarketing/batch_search',/*信用评估批量查询*/
        component: batch_precisionMarketing_standard
      },{
        path: '/precisionMarketing/batch_result',/*信用评估批量查询结果*/
        component: batch_precisionMarketing_result_standard
      },
      { path: '/accountManager', component: CreateUserInfoView({ id: 'accountManager', 'title': '账户管理'}),
        children: [
          {
            path: '',
            redirect: '/accountManager/accountOverview'
          },
          {
            path: 'accountOverview',
            component: accountOverview
          },{
            path: 'accountRecharge',
            component: accountRecharge
          },{
            path: 'rechargeLog',
            component: rechargeLog
          },{
            path: 'dealLog',
            component: dealLog
          },{
            path: 'myScheme',
            component: myScheme
          },{
            path: 'messagesInfo/:id(\\d+)?',
            component: messagesInfo
          }
        ]
      },
      // { path: '/accountManager/accountOverview', component: CreateUserInfoView({ id: 'accountManager', 'title': '账户总览'})},
      // { path: '/accountManager/accountRecharge', component: CreateUserInfoView({ id: 'accountManager', 'title': '账户充值'})},
      // { path: '/accountManager/rechargeLog', component: CreateUserInfoView({ id: 'accountManager', 'title': '充值记录'})},
      // { path: '/accountManager/dealLog', component: CreateUserInfoView({ id: 'accountManager', 'title': '消费记录'})},
      // { path: '/accountManager/myScheme', component: CreateUserInfoView({ id: 'accountManager', 'title': '我的定制方案'})},
      // { path: '/accountManager/messagesInfo', component: CreateUserInfoView({ id: 'accountManager', 'title': '消息中心'})},
      // { path: '/APIManager', component: CreateUserInfoView({ id: 'APIManager', 'title': 'API管理'})},
      { path: '/searchLog', component: CreateUserInfoView({ id: 'searchLog', 'title': '查询记录'}),
        children: [
          {
            path: '',
            redirect: '/searchLog/batchSearch'
          },
          {
            path: 'singleSearch',
            component: singleSearch
          },{
            path: 'batchSearch',
            component: batchSearch
          }
        ]
      },
      { path: '/safetyInfo', component: CreateUserInfoView({ id: 'safetyInfo', 'title': '安全中心'}),
        children: [
          {
            path: '',
            component: safetyInfo
          }
        ]
      },
      { path: '/login', component: login, meta: {requireAuth: true }},
      { path: '/forgotPassword', component: forgotPassword},
      { path: '/phoneBackPass', component: phoneBackPass},
      { path: '/emailBackPass', component: emailBackPass},
      { path: '/updateLoginPassword', component: updateLoginPassword},
      { path: '/updatePayPassword', component: updatePayPassword},
      { path: '/updatePhonePassword', component: updatePhonePassword},
      { path: '/bindEmail', component: bindEmail},
      { path: '/updateEmail', component: updateEmail},
      { path: '/userAgreement',component:userAgreement},
      { path: '/', redirect: '/login'}
    ]
  }
  const router = new Router(routes)
  return router
}
