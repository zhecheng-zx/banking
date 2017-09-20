import axios from 'axios'
import { Notification } from 'element-ui'

let transformRequest = function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret.substring(0,ret.length-1)
}

export function createAPI() {
  let api;
  axios.defaults.withCredentials = true
  axios.defaults.timeout = 60000

  axios.interceptors.response.use((res) => {
    if(res.status >= 200 && res.status < 300){
      if(res.headers['access-control-expose-headers']) {
        sessionStorage.setItem('imgToken', res.headers[res.headers['access-control-expose-headers']])
      }
      // }else{
      //   sessionStorage.removeItem('imgToken')
      // }
      return res
    }
    return Promise.reject(res)
  }, (error) => {
    // 网络异常
    localStorage.removeItem('userName')
    sessionStorage.removeItem('ANTIFRAUD_SQUERYONE_tradeId')
    sessionStorage.removeItem('_import_tradeId')
    sessionStorage.removeItem('cost')
    sessionStorage.removeItem('customTempId')
    sessionStorage.removeItem('dataCount')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('from_page')
    Notification({
      title: '提示信息',
      message: "登录超时，请重新登录",
      type: 'error',
      duration: '2000'
    });
    setTimeout(()=>{
      window.location.href = '/'
    },2000)
    return Promise.reject({ message: '登录超时，请重新登录', err: error })
  });
  if(process.__API__){
    api = process.__API__
  }else{
    api = process.__API__ = {
      get (target, params={}) {
        let token = ''
        if(target == "/api/authenticate/login"){
          token = ''
        }else{
          token = sessionStorage.getItem('token')
        }
        const suffix = Object.keys(params).map(name => {
          return `${name}=${params[name]}`
        }).join('&')
        let urls = ''
        if(suffix.length>0){
          urls = `${target}?${suffix}`
          urls += '&JSESSIONID='+token
        }else{
          urls = `${target}`
          urls += ';JSESSIONID='+token
        }
        return new Promise((resolve, reject) => {
          axios.get(urls, params,{headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 'Authorization': token}}).then(res =>{
            resolve(res.data);
          }).catch((error) => {
            reject(error);
          })
        })
      },
      get2 (target, params={}) {
        let urls = ''
        urls = `${target}`
        return new Promise((resolve, reject) => {
          axios.get(urls, params,{headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}}).then(res =>{
            resolve(res.data);
          }).catch((error) => {
            reject(error);
          })
        })
      },
      post: function (target, options = {}) {
        let token = ''
        if(target == "/api/authenticate/login"){
          token = sessionStorage.getItem('imgToken')
        }else{
          token = sessionStorage.getItem('token')
        }
        return new Promise((resolve, reject) =>{
          axios.post(target, transformRequest(options),{headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8','Authorization': token}}).then(res => {
            resolve(res.data)
          }).catch((error) => {
            reject(error)
          })
        })
      },
      post2: function (target, options={}) {
        let token = ''
        if(target == "/api/authenticate/login"){
          token = ''
        }else{
          token = sessionStorage.getItem('token')
        }
        return new Promise((resolve, reject) =>{
          axios.post(target, transformRequest(options),{headers:{'Content-Type': 'multipart/form-data','Authorization': token}}).then(res => {
            resolve(res.data)
          }).catch((error) => {
            reject(error)
          })
        })
      }
    }
  }
  return api
}
//
// import Firebase from 'firebase/app'
// import 'firebase/database'
//
// export function createAPI ({ config, version }) {
//   Firebase.initializeApp(config)
//   return Firebase.database().ref(version)
// }
