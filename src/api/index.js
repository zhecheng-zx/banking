// this is aliased in webpack config based on server/client build
import { createAPI }  from 'create-api'

// const logRequests = !!process.env.DEBUG_API

const api = createAPI();

/**
 * 登录接口
 * @param param ({username,password,captcha})
 * @returns {*|AxiosPromise}
 */
export function login(param) {
  return api.post('/api/authenticate/login', param);
}

/**
 * 退出系统
 */
export function logout() {
  return api.get('/api/authenticate/logout');
}
/**
 * 反欺诈（标准版）单一查询
 * @param param ({name,idNo,mobile,arctic,payPassword})
 * @returns {*|AxiosPromise}
 */
export function antifraud_squeryone(param) {
  return api.post('/api/antifraud/squeryone', param)
}
/**
 * 反欺诈（标准版）批量查询
 * @param param ({tradeId:'交易ID',payPassword: '交易密码'})
 * @returns {*|AxiosPromise}
 */
export function antifraud_bqueryone(param) {
  return api.post('/api/antifraud/bqueryone', param)
}
/**
 * 获取定制方案批量上传模版名字
 * @param param
 * @returns {*|AxiosPromise}
 */
export function antifraud_createTemplate(param) {
  return api.get('/api/antifraud/createTemplate', param)
}
/**
 * 模板上传导入{solutionId 和 antifraudCustomSolutionId 有且只能有一个不能为空}
 * @param param
 * @returns {*|AxiosPromise}
 */
export function excel_import(param) {
  return api.post2('/api/excel/import', param)
}
/**
 * 获取定制方案列表
 *
 */
export function antifraud_custom() {
  return api.get('/api/antifraud/custom')
}
/**
 * 设置默认方案
 * @param param
 */
export function antifraud_custom_setup(param) {
  return api.get('/api/antifraud/custom/setup',param)
}
/**
 * 添加定制方案
 * @param param
 */
export function antifraud_custom_add(param) {
  return api.post('/api/antifraud/custom/add',param)
}
/**
 * 删除定制方案
 * @param param
 * @returns {AxiosPromise|*}
 */
export function antifraud_custom_del(param) {
  return api.post('/api/antifraud/custom/del',param)
}
/**
 * 获取定制方案的参数信息
 */
export function antifraud_custom_getProducts() {
  return api.get('/api/antifraud/custom/getProducts')
}
/**
 * 查询定制方案列表信息-修改时-反显
 * @param param
 * @returns {*|AxiosPromise}
 */
export function antifraud_custom_get(param) {
  return api.post('/api/antifraud/custom/get', param)
}
/**
 * 修改定制方案内容
 * @param param
 * @returns {*|AxiosPromise}
 */
export function antifraud_custom_update(param) {
  return api.post('/api/antifraud/custom/update', param)
}
/**
 * 获取反欺诈定制方案查询的输入参数
 * @param param
 * @returns {AxiosPromise|*}
 */
export function antifraud_custom_getArgs(param) {
  return api.post('/api/antifraud/custom/getArgs', param)
}
/**
 * 反欺诈单一查询（定制）【定制版的参数不是固定的，这里不能全部展示】
 * @param param ({customSolutionId,payPassword})
 * @returns {*|AxiosPromise}
 */
export function antifraud_squerytwo(param) {
  return api.post('/api/antifraud/squerytwo', param)
}
/**
 * 反欺诈批量查询（定制）
 * @param param ({customSolutionId,tradeId,payPassword})
 * @returns {*|AxiosPromise}
 */
export function antifraud_cquerytwo(param) {
  return api.post('/api/antifraud/cquerytwo', param)
}
/**
 * 反欺诈批量结果
 * @param param (tradeId)
 * @returns {*|AxiosPromise}
 */
export function antifraud_bqueryResult(param) {
  return api.post('/api/antifraud/bqueryResult', param)
}
/**
 * 反欺诈单一结果
 * @param param
 * @returns {*|AxiosPromise}
 */
export function antifraud_queryResult(param) {
  return api.post('/api/antifraud/queryResult', param)
}
/**
 * 计算扣费金额
 * @param param (solutionId)
 * @returns {*|AxiosPromise}
 */
export function compute_single(param) {
  return api.post('/api/compute/single', param)
}
/**
 * (标准版)信用评估批量查询
 * @param param
 * @returns {*|AxiosPromise}
 */
export function assess_stantard_batch(param) {
  return api.post('/api/assess/stantard/batch', param)
}
/**
 * (标准版)信用评估批量结果
 * @param param
 * @returns {*|AxiosPromise}
 */
export function assess_stantard_batchResult(param) {
  return api.post('/api/assess/stantard/batchResult', param)
}
/**
 * (标准版)信用评估单一查询
 * @param param
 * @returns {*|AxiosPromise}
 */
export function assess_stantard_query(param) {
  return api.post('/api/assess/stantard/query', param)
}
/**
 * (标准版)信用评估单一结果
 * @param param
 * @returns {*|AxiosPromise}
 */
export function assess_stantard_result(param) {
  return api.post('/api/assess/stantard/result', param)
}
/**
 * (详情版)信用评估批量查询
 * @param param
 * @returns {*|AxiosPromise}
 */
export function assess_details_batch(param) {
  return api.post('/api/assess/details/batch', param)
}
/**
 * (详情版)信用评估批量结果
 * @param param
 * @returns {*|AxiosPromise}
 */
export function assess_details_batchResult(param) {
  return api.post('/api/assess/details/batchResult', param)
}
/**
 * (详情版)信用评估单一查询
 * @param param
 * @returns {*|AxiosPromise}
 */
export function assess_details_query(param) {
  return api.post('/api/assess/details/query', param)
}
/**
 * (详情版)信用评估单一结果
 * @param param
 * @returns {*|AxiosPromise}
 */
export function assess_details_result(param) {
  return api.post('/api/assess/details/result', param)
}
/**
 * 贷后风险监测批量查询
 * @param param
 * @returns {*|AxiosPromise}
 */
export function creditrisk_bQuery(param) {
  return api.post('/api/creditrisk/bQuery', param)
}
/**
 * 贷后风险监测批量结果
 * @param param
 * @returns {*|AxiosPromise}
 */
export function creditrisk_bResult(param) {
  return api.post('/api/creditrisk/bResult', param)
}
/**
 * 精准营销批量查询
 * @param param
 * @returns {*|AxiosPromise}
 */
export function marketing_batch(param) {
  return api.post('/api/marketing/batch', param)
}
/**
 * 精准营销批量结果
 * @param param
 * @returns {*|AxiosPromise}
 */
export function marketing_bResult(param) {
  return api.post('/api/marketing/bResult', param)
}
/*****************个人中心开始**********************/
/**
 * 获取批量查询页的列表
 * @param param
 * @returns {*|AxiosPromise}
 */
export function records_batch(param) {
  return api.post('/api/records/batch', param)
}
/**
 * 获取单一查询页的列表
 * @param param
 * @returns {*|AxiosPromise}
 */
export function records_single(param) {
  return api.post('/api/records/single', param)
}
/**
 * 统计账户余额
 * @param param
 * @returns {*|AxiosPromise}
 */
export function recharge_amount(param) {
  return api.post('/api/recharge/amount', param)
}
/**
 * 查询最新的充值记录列表
 * @param param
 * @returns {*|AxiosPromise}
 */
export function recharge_latest(param) {
  return api.get('/api/recharge/latest', param)
}
/**
 * 根据交易ID获取交易明细
 * @param param
 */
export function trading_detail(param) {
  return api.get('/api/trading/detail', param)
}
/**
 * 登录页获取token
 */
export function authenticate_token() {
  return api.get2('/api/authenticate/token')
}
/**
 * 条件检索充值列表
 * @param param
 * @returns {*|AxiosPromise}
 */
export function recharge_search(param) {
  return api.post('/api/recharge/search', param)
}
/**
 * 查询定制方案价格
 * @param param
 * @returns {*|AxiosPromise}
 */
export function antifraud_custom_charge(param) {
  return api.get('/api/antifraud/custom/charge', param)
}
/**
 * 查询N条最新的交易记录
 * @param param String
 * @returns {*|AxiosPromise}
 */
export function trading_latest(param) {
  return api.get('/api/trading/latest', param)
}
/**
 * 条件查询交易列表
 * @param param String
 * @returns {*|AxiosPromise}
 */
export function trading_search(param) {
  return api.post('/api/trading/search', param)
}
/**
 * 消息中心列表
 * @param param
 * @returns {*|AxiosPromise}
 */
export function message(param) {
  return api.post('/api/message', param)
}
/**
 * 删除消息
 * @param param
 * @returns {*|AxiosPromise}
 */
export function message_del(param) {
  return api.post('/api/message/del', param)
}
/**
 * 查看消息
 * @param param
 * @returns {*|AxiosPromise}
 */
export function message_show(param) {
  return api.post('/api/message/show', param)
}
/********************安全中心开始**********************/
/**
 * 更换支付密码
 * @param param
 * @returns {*|AxiosPromise}
 */
export function security_changePwd(param) {
  return api.post('/api/security/changePwd', param)
}
/**
 * 绑定支付密码
 * @param param
 * @returns {*|AxiosPromise}
 */
export function security_bindPay(param) {
  return api.post('/api/security/bindPay', param)
}
/**
 * 更换支付密码
 * @param param
 * @returns {*|AxiosPromise}
 */
export function security_changePay(param) {
  return api.post('/api/security/changePay', param)
}
/**
 * 验证登陆状态
 * @param param
 * @returns {*|AxiosPromise}
 */
export function security_checkSession() {
  return api.post('/api/security/checkSession')
}
/**
 * 根据数据显示状态
 * @param param
 * @returns {*|AxiosPromise}
 */
export function security_dataStatus() {
  return api.post('/api/security/dataStatus')
}
/**
 * 绑定手机号码
 * @param param
 * @returns {*|AxiosPromise}
 */
export function phone_bind(param) {
  return api.post('/api/phone/bind', param)
}
/**
 * 发送短信验证码
 * @param param
 * @returns {*|AxiosPromise}
 */
export function phone_send(param) {
  return api.post('/api/phone/send', param)
}
/**
 * (更换手机号)第一页验证
 * @param param
 * @returns {*|AxiosPromise}
 */
export function phone_step1(param) {
  return api.post('/api/phone/step1', param)
}
/**
 * (更换手机号)第二页验证
 * @param param
 * @returns {*|AxiosPromise}
 */
export function phone_step2(param) {
  return api.post('/api/phone/step2', param)
}
/**
 * 绑定邮箱地址
 * @param param
 * @returns {*|AxiosPromise}
 */
export function email_bind(param) {
  return api.post('/api/email/bind', param)
}
/**
 * 更换邮箱地址
 * @param param
 * @returns {*|AxiosPromise}
 */
export function email_change(param) {
  return api.post('/api/email/change', param)
}
/**
 * 邮件发送验证码
 * @param param
 * @returns {*|AxiosPromise}
 */
export function email_send(param) {
  return api.post('/api/email/send', param)
}
// export function getYZM() {
//   let url = ''
//   api.get('api/security/captcha',{}).then(res => {
//     console.log(res)
//     url=res
//   })
//   return url
// }
// const api = createAPI({
//   version: '/v0',
//   config: {
//     databaseURL: 'https://hacker-news.firebaseio.com'
//   }
// })
// // warm the front page cache every 15 min
// // make sure to do this only once across all requests
// if (api.onServer) {
//   warmCache()
// }
//
// function warmCache () {
//   fetchItems((api.cachedIds.top || []).slice(0, 30))
//   setTimeout(warmCache, 1000 * 60 * 15)
// }
//
// function fetch (child) {
//   logRequests && console.log(`fetching ${child}...`)
//   const cache = api.cachedItems
//   if (cache && cache.has(child)) {
//     logRequests && console.log(`cache hit for ${child}.`)
//     return Promise.resolve(cache.get(child))
//   } else {
//     return new Promise((resolve, reject) => {
//       api.child(child).once('value', snapshot => {
//         const val = snapshot.val()
//         // mark the timestamp when this item is cached
//         if (val) val.__lastUpdated = Date.now()
//         cache && cache.set(child, val)
//         logRequests && console.log(`fetched ${child}.`)
//         resolve(val)
//       }, reject)
//     })
//   }
// }
//
// export function fetchIdsByType (type) {
//   return api.cachedIds && api.cachedIds[type]
//     ? Promise.resolve(api.cachedIds[type])
//     : fetch(`${type}stories`)
// }
//
// export function fetchItem (id) {
//   return fetch(`item/${id}`)
// }
//
// export function fetchItems (ids) {
//   return Promise.all(ids.map(id => fetchItem(id)))
// }
//
// export function fetchUser (id) {
//   return fetch(`user/${id}`)
// }
//
// export function watchList (type, cb) {
//   let first = true
//   const ref = api.child(`${type}stories`)
//   const handler = snapshot => {
//     if (first) {
//       first = false
//     } else {
//       cb(snapshot.val())
//     }
//   }
//   ref.on('value', handler)
//   return () => {
//     ref.off('value', handler)
//   }
// }
