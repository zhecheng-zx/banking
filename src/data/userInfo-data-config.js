/**
 * Created by zhangxin on 2017/9/4.
 */
const data = {
  accountManager: {
    name: '账户管理',
    link: '/accountManager',
    navFlag: true,
    children: [
      {
        name: '账户总览',
        link: '/accountManager/accountOverview'
      },
      // {
      //   name: '账户充值',
      //   link: '/accountManager/accountRecharge'
      // },
      {
        name: '充值记录',
        link: '/accountManager/rechargeLog'
      },
      {
        name: '消费记录',
        link: '/accountManager/dealLog'
      },
      {
        name: '我的定制方案',
        link: '/accountManager/myScheme'
      },
      {
        name: '消息中心',
        link: '/accountManager/messagesInfo'
      }
    ]
  },
  // APIManager: {
  //   name: 'API管理',
  //   link: '/APIManager',
  //   navFlag: false,
  //   children: []
  // },
  searchLog: {
    name: '查询记录',
    link: '/searchLog',
    navFlag: true,
    children: [
      {
        name: '批量查询',
        link: '/searchLog/batchSearch'
      },
      {
        name: '单一查询',
        link: '/searchLog/singleSearch'
      }
    ]
  },
  safetyInfo: {
    name: '安全中心',
    link: '/safetyInfo',
    navFlag: false,
    children: []
  }
}

export default {
  data
}
