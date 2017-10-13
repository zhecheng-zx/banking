// import {
//   fetchUser,
//   fetchItems,
//   fetchIdsByType
// } from '../api'
import {
  login,
  logout,
  clause,
  authenticate_token,
  antifraud_squeryone,
  antifraud_bqueryone,
  antifraud_squerytwo,
  antifraud_queryResult,
  antifraud_bqueryResult,
  antifraud_cquerytwo,
  antifraud_custom,
  assess_details_batch,
  assess_details_batchResult,
  assess_details_query,
  assess_details_result,
  assess_stantard_batch,
  assess_stantard_batchResult,
  assess_stantard_query,
  assess_stantard_result,
  compute_single,
  creditrisk_bQuery,
  creditrisk_bResult,
  marketing_batch,
  marketing_bResult,
  excel_import,
  antifraud_custom_setup,
  antifraud_custom_add,
  antifraud_custom_del,
  antifraud_custom_getProducts,
  antifraud_custom_get,
  antifraud_custom_update,
  antifraud_custom_getArgs,
  antifraud_createTemplate,
  records_single,
  records_batch,
  recharge_amount,
  recharge_latest,
  recharge_search,
  trading_detail,
  trading_latest,
  trading_search,
  message,
  message_del,
  message_show,
  antifraud_custom_charge,
  security_changePwd,
  security_bindPay,
  security_changePay,
  security_checkSession,
  security_dataStatus,
  phone_bind,
  phone_send,
  phone_send1,
  phone_step1,
  phone_step2,
  phone_sendBack,
  phone_stepBack1,
  phone_stepBack2,
  email_bind,
  email_change,
  email_send,
  email_send2,
  email_sendBack,
  email_stepBack1,
  email_stepBack2
} from '../api'
import data from '../data/index-data-config'
import userInfoData from '../data/userInfo-data-config'

export default {
  // ensure data for rendering given list type
  // FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
  //   commit('SET_ACTIVE_TYPE', { type })
  //   return fetchIdsByType(type)
  //     .then(ids => commit('SET_LIST', { type, ids }))
  //     .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
  // },

  // 加载几个菜单的首页面数据
  INDEX_SETUP_FILE:({ commit, dispatch, state }, { type }) => {
    commit('SET_ACTIVE_TYPE', { type })
    let items = data.data
    state.lists[type] = items[type]
    return
  },
  /*个人中心的页面数据*/
  USER_INFO_DATA: ({ commit, dispatch, state }, { type }) => {
    commit('SET_ACTIVE_TYPE', { type })
    let items = userInfoData.data
    state.lists[type] = items[type]
    return
  },
  /*管理登录状态*/
  MANAGER_LOGIN_STATE: ({commit, state},{ loginStatus }) => {
    commit('SET_LOGIN_STATE', { loginStatus })
    state.isLogin = loginStatus
    return
  },
  /*login*/
  LOGIN:({ commit, dispatch, state},{ param }) => {
    return login(param).then((res,req) => {
      return res
    })
  },
  /**
   * 退出系统
   * @param commit
   * @param dispatch
   * @param state
   * @returns {Thenable<U>|*|Promise.<TResult>|Promise<U>}
   * @constructor
   */
  AUTHENTICATE_LOGOUT:({ commit, dispatch, state}) => {
    return logout().then((res,req) => {
      return res
    })
  },
  /**
   * 清除第一次登录的弹窗
   * @param commit
   * @param dispatch
   * @param state
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  AUTHENTICATE_CLAUSE:({ commit, dispatch, state}) => {
    return clause().then((res,req) => {
      return res
    })
  },
  /**
   * 反欺诈（标准版）单一查询
   * @param param ({name,idNo,mobile,arctic,payPassword})
   * @returns {*|AxiosPromise}
   */
  ANTIFRAUD_SQUERYONE:({commit, dispatch, state}, {param}) => {
    return antifraud_squeryone(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 反欺诈（标准版）批量查询
   * @param param ({tradeId:'交易ID',payPassword: '交易密码'})
   * @returns {*|AxiosPromise}
   */
  ANTIFRAUD_BQUERYONE: ({commit, dispatch, state}, {param})=> {
    return antifraud_bqueryone(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 模板上传导入{solutionId 和 antifraudCustomSolutionId 有且只能有一个不能为空}
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|*|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  EXCEL_IMPORT: ({ commit, dispatch, state}, { param }) => {
    return excel_import(param).then((res,req) => {
      return res
    })
  },
  /**
   * 获取 定制版 批量上传 方案 模版名字
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Promise<U>|*|Thenable<U>|Promise.<TResult>}
   * @constructor
   */
  ANTIFRAUD_CREATETEMPLATE: ({ commit, dispatch, state}, { param }) => {
    return antifraud_createTemplate(param).then((res,req) => {
      return res
    })
  },

  /**
   * 查询定制方案
   * @param commit
   * @param dispatch
   * @param state
   * @returns {Promise<U>|Thenable<U>|*|Promise.<TResult>}
   * @constructor
   */
  ANTIFRAUD_CUSTOM: ({commit, dispatch, state})=>{
    return antifraud_custom().then((res,req) => {
      return res
    })
  },
  /**
   * 设置默认方案
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|*|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  ANTIFRAUD_CUSTOM_SETUP: ({commit, dispatch, state}, { param }) => {
    return antifraud_custom_setup(param).then((res,req) => {
      return res
    })
  },
  /**
   * 获取定制方案的参数信息
   * @param commit
   * @param dispatch
   * @param state
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  ANTIFRAUD_CUSTOM_GETPRODUCTS: ({commit, dispatch, state})=>{
    return antifraud_custom_getProducts().then((res,req) => {
      return res
    })
  },
  ANTIFRAUD_CUSTOM_CHARGE: ({commit, dispatch, state},{ param })=>{
    return antifraud_custom_charge(param).then((res,req) => {
      return res
    })
  },
  /**
   * 添加定制方案
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|*|Promise.<TResult>}
   * @constructor
   */
  ANTIFRAUD_CUSTOM_ADD: ({commit, dispatch, state}, { param }) => {
    return antifraud_custom_add(param).then((res,req) => {
      return res
    })
  },
  /**
   * 删除定制方案
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {*|Thenable<U>|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  ANTIFRAUD_CUSTOM_DEL: ({commit, dispatch, state}, { param }) => {
    return antifraud_custom_del(param).then((res,req) => {
      return res
    })
  },
  /**
   * 获取定制方案列表的信息，反显
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Promise<U>|*|Promise.<TResult>|Thenable<U>}
   * @constructor
   */
  ANTIFRAUD_CUSTOM_GET: ({commit, dispatch, state}, { param }) => {
    return antifraud_custom_get(param).then((res,req) => {
      return res
    })
  },
  /**
   * 修改定制方案内容
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {*|Promise.<TResult>|Thenable<U>|Promise<U>}
   * @constructor
   */
  ANTIFRAUD_CUSTOM_UPDATE: ({commit, dispatch, state}, { param }) => {
    return antifraud_custom_update(param).then((res,req) => {
      return res
    })
  },
  /**
   * 获取反欺诈定制查询的输入参数
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Promise<U>|*|Promise.<TResult>|Thenable<U>}
   * @constructor
   */
  ANTIFRAUD_CUSTOM_GETARGS: ({commit, dispatch, state}, { param }) => {
    return antifraud_custom_getArgs(param).then((res,req) => {
      return res
    })
  },
  /**
   * 反欺诈单一查询（定制）【定制版的参数不是固定的，这里不能全部展示】
   * @param param ({customSolutionId,payPassword})
   * @returns {*|AxiosPromise}
   */
  ANTIFRAUD_SQUERYTWO:({commit, dispatch, state}, {param}) => {
    return antifraud_squerytwo(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 反欺诈批量查询（定制）
   * @param param ({customSolutionId,tradeId,payPassword})
   * @returns {*|AxiosPromise}
   */
  ANTIFRAUD_CQUERYTWO: ({commit, dispatch, state}, {param}) => {
    return antifraud_cquerytwo(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 反欺诈批量结果
   * @param param (tradeId)
   * @returns {*|AxiosPromise}
   */
  ANTIFRAUD_BQUERYRESULT: ({commit, dispatch, state}, {param}) => {
    return antifraud_bqueryResult(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 反欺诈(定制版／标准)单一结果
   * @param param
   * @returns {*|AxiosPromise}
   */
  ANTIFRAUD_QUERYRESULT: ({commit, dispatch, state}, {param}) => {
    return antifraud_queryResult(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 计算扣费金额
   * @param param (solutionId)
   * @returns {*|AxiosPromise}
   */
  COMPUTE_SINGLE: ({commit, dispatch, state}, {param}) => {
    return compute_single(param).then((res,req)=>{
      return res
    })
  },
  /**
   * (标准版)信用评估批量查询
   * @param param
   * @returns {*|AxiosPromise}
   */
  ASSESS_STANTARD_BATCH: ({commit, dispatch, state}, {param}) => {
    return assess_stantard_batch(param).then((res,req)=>{
      return res
    })
  },
  /**
   * (标准版)信用评估批量结果
   * @param param
   * @returns {*|AxiosPromise}
   */
  ASSESS_STANTARD_BATCHRESULT: ({commit, dispatch, state}, {param}) => {
    return assess_stantard_batchResult(param).then((res,req)=>{
      return res
    })
  },
  /**
   * (标准版)信用评估单一查询
   * @param param
   * @returns {*|AxiosPromise}
   */
  ASSESS_STANTARD_QUERY: ({commit, dispatch, state}, {param}) => {
    return assess_stantard_query(param).then((res,req)=>{
      return res
    })
  },
  /**
   * (标准版)信用评估单一结果
   * @param param
   * @returns {*|AxiosPromise}
   */
  ASSESS_STANTARD_RESULT: ({commit, dispatch, state}, {param}) => {
    return assess_stantard_result(param).then((res,req)=>{
      return res
    })
  },
  /**
   * (详情版)信用评估批量查询
   * @param param
   * @returns {*|AxiosPromise}
   */
  ASSESS_DETAILS_BATCH: ({commit, dispatch, state}, {param}) => {
    return assess_details_batch(param).then((res,req)=>{
      return res
    })
  },
  /**
   * (详情版)信用评估批量结果
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @constructor
   */
  ASSESS_DETAILS_BATCHRESULT: ({commit, dispatch, state}, {param}) => {
    return assess_details_batchResult(param).then((res,req)=>{
      return res
    })
  },
  /**
   * (详情版)信用评估单一查询
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @constructor
   */
  ASSESS_DETAILS_QUERY: ({commit, dispatch, state}, {param}) =>  {
    return assess_details_query(param).then((res,req)=>{
      return res
    })
  },
  /**
   * (详情版)信用评估单一结果
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @constructor
   */
  ASSESS_DETAILS_RESULT: ({commit, dispatch, state}, {param}) => {
    return assess_details_result(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 贷后风险监测批量查询
   * @param param
   * @returns {*|AxiosPromise}
   */
  CREDITRISK_BQUERY: ({commit, dispatch, state}, {param}) => {
    return creditrisk_bQuery(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 贷后风险监测批量结果
   * @param param
   * @returns {*|AxiosPromise}
   */
  CREDITRISK_BRESULT: ({commit, dispatch, state}, {param}) => {
    return creditrisk_bResult(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 精准营销批量查询
   * @param param
   * @returns {*|AxiosPromise}
   */
  MARKETING_BATCH: ({commit, dispatch, state}, {param}) => {
    return marketing_batch(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 精准营销批量结果
   * @param param
   * @returns {*|AxiosPromise}
   */
  MARKETING_BRESULT: ({commit, dispatch, state}, {param}) => {
    return marketing_bResult(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 批量查询的列表
   * @param param
   * @returns {*|AxiosPromise}
   */
  RECORDS_BATCH: ({commit, dispatch, state}, {param}) => {
    return records_batch(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 单一查询页的列表
   * @param param
   * @returns {*|AxiosPromise}
   */
  RECORDS_SINGLE: ({commit, dispatch, state}, {param}) => {
    return records_single(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 统计账户余额
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  RECHARGE_AMOUNT: ({commit, dispatch, state}, {param}) => {
    return recharge_amount(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 查询最新的充值记录列表
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  RECHARGE_LATEST: ({commit, dispatch, state}, {param}) => {
    return recharge_latest(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 条件检索充值列表
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  RECHARGE_SEARCH: ({commit, dispatch, state}, {param}) => {
    return recharge_search(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 根据交易ID获取交易明细
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  TRADING_DETAIL: ({commit, dispatch, state}, {param}) => {
    return trading_detail(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 查询N条最新的交易记录
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  TRADING_LATEST: ({commit, dispatch, state}, {param}) => {
    return trading_latest(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 条件查询交易列表
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  TRADING_SEARCH: ({commit, dispatch, state}, {param}) => {
    return trading_search(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 消息中心列表
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  MESSAGE: ({commit, dispatch, state}, {param}) => {
    return message(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 删除消息
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  MESSAGE_DEL: ({commit, dispatch, state}, {param}) => {
    return message_del(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 查看消息
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
   * @constructor
   */
  MESSAGE_SHOW: ({commit, dispatch, state}, { param }) => {
    return message_show(param).then((res,req)=>{
      return res
    })
  },
  /***************安全中心开始***************/
  /**
   * 修改登录密码
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Promise.<TResult>|Promise<U>|Thenable<U>|*}
   * @constructor
   */
  SECURITY_CHANGEPWD: ({commit, dispatch, state}, { param }) => {
    return security_changePwd(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 绑定支付密码
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Promise<U>|*|Thenable<U>|Promise.<TResult>}
   * @constructor
   */
  SECURITY_BINDPAY: ({commit, dispatch, state}, { param }) => {
    return security_bindPay(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 修改支付密码
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {Promise<U>|*|Thenable<U>|Promise.<TResult>}
   * @constructor
   */
  SECURITY_CHANGEPAY: ({commit, dispatch, state}, { param }) => {
    return security_changePay(param).then((res,req)=>{
      return res
    })
  },
  SECURITY_CHECKSESSION: ({commit, dispatch, state}) => {
    return security_checkSession().then((res,req)=>{
      return res
    })
  },
  SECURITY_DATASTATUS: ({commit, dispatch, state}) => {
    return security_dataStatus().then((res,req)=>{
      return res
    })
  },
  PHONE_BIND: ({commit, dispatch, state}, { param }) => {
    return phone_bind(param).then((res,req)=>{
      return res
    })
  },
  PHONE_SEND: ({commit, dispatch, state}, { param }) => {
    return phone_send(param).then((res,req)=>{
      return res
    })
  },
  PHONE_SEND1: ({commit, dispatch, state}, { param }) => {
    return phone_send1(param).then((res,req)=>{
      return res
    })
  },
  PHONE_STEP1: ({commit, dispatch, state}, { param }) => {
    return phone_step1(param).then((res,req)=>{
      return res
    })
  },
  PHONE_STEP2: ({commit, dispatch, state}, { param }) => {
    return phone_step2(param).then((res,req)=>{
      return res
    })
  },
  EMAIL_BIND: ({commit, dispatch, state}, { param }) => {
    return email_bind(param).then((res,req)=>{
      return res
    })
  },
  EMAIL_CHANGE: ({commit, dispatch, state}, { param }) => {
    return email_change(param).then((res,req)=>{
      return res
    })
  },
  EMAIL_SEND: ({commit, dispatch, state}, { param }) => {
    return email_send(param).then((res,req)=>{
      return res
    })
  },
  EMAIL_SEND2: ({commit, dispatch, state}, { param }) => {
    return email_send2(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 手机号找回密码  发送手机验证码
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {*|Thenable<U>|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  PHONE_SENDBACK: ({commit, dispatch, state}, { param }) => {
    return phone_sendBack(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 手机号找回密码   第一步
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {*|Thenable<U>|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  PHONE_STEPBACK1: ({commit, dispatch, state}, { param }) => {
    return phone_stepBack1(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 手机号找回密码    第二步
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {*|Thenable<U>|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  PHONE_STEPBACK2: ({commit, dispatch, state}, { param }) => {
    return phone_stepBack2(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 登录页获取token
   * @param commit
   * @param dispatch
   * @param state
   * @returns {Promise<U>|Thenable<U>|*|Promise.<TResult>}
   * @constructor
   */
  AUTHENTICATE_TOKEN: ({commit, dispatch, state}) => {
    return authenticate_token().then((res,req)=>{
      return res
    })
  },
  /**
   * 邮箱找回密码  发送手机验证码
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {*|Thenable<U>|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  EMAIL_SENDBACK: ({commit, dispatch, state}, { param }) => {
    return email_sendBack(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 邮箱找回密码   第一步
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {*|Thenable<U>|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  EMAIL_STEPBACK1: ({commit, dispatch, state}, { param }) => {
    return email_stepBack1(param).then((res,req)=>{
      return res
    })
  },
  /**
   * 邮箱找回密码    第二步
   * @param commit
   * @param dispatch
   * @param state
   * @param param
   * @returns {*|Thenable<U>|Promise<U>|Promise.<TResult>}
   * @constructor
   */
  EMAIL_STEPBACK2: ({commit, dispatch, state}, { param }) => {
    return email_stepBack2(param).then((res,req)=>{
      return res
    })
  },
  // email_sendBack,
  // email_stepBack1,
  // email_stepBack2
  // FETCH_YZM_IMG: ({commit, dispatch, state})=>{
  //   // commit('SET_YZM_URL', { url })
  //   return getYZM().then(url => commit('SET_YZM_IMG', { url }))
  // }
  // ensure all active items are fetched
  // ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
  //   return dispatch('FETCH_ITEMS', {
  //     ids: getters.activeIds
  //   })
  // },

  // FETCH_ITEMS: ({ commit, state }, { ids }) => {
  //   // on the client, the store itself serves as a cache.
  //   // only fetch items that we do not already have, or has expired (3 minutes)
  //   const now = Date.now()
  //   ids = ids.filter(id => {
  //     const item = state.items[id]
  //     if (!item) {
  //       return true
  //     }
  //     if (now - item.__lastUpdated > 1000 * 60 * 3) {
  //       return true
  //     }
  //     return false
  //   })
  //   if (ids.length) {
  //     return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
  //   } else {
  //     return Promise.resolve()
  //   }
  // },

  // FETCH_USER: ({ commit, state }, { id }) => {
  //   return state.users[id]
  //     ? Promise.resolve(state.users[id])
  //     : fetchUser(id).then(user => commit('SET_USER', { id, user }))
  // }
}
