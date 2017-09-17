/**
 * Created by zhangxin on 2017/8/31.
 */
const data = {
  index: {
    top: {
      title: '产品与服务',
      icon: '/public/images/server.png',
      content: [
        {
          col: "col-md-6",
          name: '反欺诈',
          profile: '多维度交叉识别欺诈行为，助您提升反欺诈识别能力。',
          center_icon: '/public/images/thumbnail_1.png',
          background: 'thumbnail background bg1',
          crown: false,
          crown_icon: '',
          sub_title: false,
          sub_icon: '',
          btn_flag:false,
          btn_group:[]
        },{
          col: "col-md-6",
          name: '信用评估',
          profile: '信用判定，授信额度。',
          center_icon: '/public/images/thumbnail_2.png',
          background: 'thumbnail background bg2',
          crown: false,
          crown_icon: '',
          type: '',
          sub_title: false,
          sub_icon: '',
          btn_flag:false,
          btn_group:[]
        },{
          col: "col-md-6",
          name: '贷后风险监测',
          profile: '从放款开始检测客户还款情况，授信跟进',
          center_icon: '/public/images/thumbnail_3.png',
          background: 'thumbnail background bg3',
          crown: false,
          crown_icon: '',
          type: '',
          sub_title: false,
          sub_icon: '',
          btn_flag:false,
          btn_group:[]
        },{
          col: "col-md-6",
          name: '风险舆情',
          profile: '海量数据进行采集和智能分析，稳准狠快地把互联网读懂，读薄',
          center_icon: '/public/images/thumbnail_4.png',
          background: 'thumbnail background bg4',
          crown: false,
          crown_icon: '',
          type: '',
          sub_title: false,
          sub_icon: '',
          btn_flag:false,
          btn_group:[]
        },{
          col: "col-md-12",
          name: '精准营销',
          profile: '消费画像，针对现有客户提高活跃度，提升粘性',
          center_icon: '/public/images/thumbnail_5.png',
          background: 'thumbnail thumbnail-center  background bg5',
          crown: false,
          crown_icon: '',
          type: '',
          sub_title: false,
          sub_icon: '',
          btn_flag:false,
          btn_group:[]
        }
      ]
    },
    bottom: {
      title: '我们的优势',
      icon: '/public/images/top.png',
      content: [
        {
          content: '具备庞大的数据库和优质的第三方数据源，数据覆盖全国',
          icon: '/public/images/thumbnail_6.png'
        },
        {
          content: '智能机器学习模型，结果精准且有特点，输出不仅包括量化分值，还包括描述性评判结果',
          icon: '/public/images/thumbnail_7.png'
        },
        {
          content: '数据响应毫秒级',
          icon: '/public/images/thumbnail_8.png'
        },
        {
          content: '深度了解金融行业需求及其痛点',
          icon: '/public/images/thumbnail_9.png'
        }
      ]
    }
  },
  antiFraud: {
    top: {
      title: '反欺诈',
      icon: '/public/images/safety.png',
      content: [
        {
          col: "col-md-6",
          name: '反欺诈',
          profile: '源头阻断风险，精准识别和预测欺诈风险，实时提供跨行业、多场景欺诈风险预警。',
          center_icon: '/public/images/thumbnail_1.png',
          background: 'thumbnail background_item_safety',
          crown: false,
          crown_icon: '',
          type: '标准版',
          sub_title: true,
          sub_icon: 'safety-icon standard',
          btn_flag: true,
          btn_group:[
            {
              name: '单一查询',
              link: '/antiFraud/search',
              type: 'single',
              mode: 'standard'
            },
            {
              name: '批量查询',
              link: '/antiFraud/batch_search',
              type: 'batch',
              mode: 'standard'
            }
          ]
        },{
          col: "col-md-6",
          name: '反欺诈',
          profile: '量身定制属于自己的反欺诈，让风险彻底切断。',
          center_icon: '/public/images/thumbnail_1.png',
          background: 'thumbnail background_item_safety',
          crown: true,
          crown_icon: 'safety-icon honor',
          type: '定制版',
          sub_title: true,
          sub_icon: 'safety-icon custom-model',
          btn_flag:true,
          btn_group:[
            {
              name: '单一查询',
              link: '/antiFraud/customization_search',
              type: 'single',
              mode: 'customization'
            },
            {
              name: '批量查询',
              link: '/antiFraud/customization_batch_search',
              type: 'batch',
              mode: 'customization'
            }
          ]
        }
      ]
    },
    bottom: {
      title: '我们的优势',
      icon: '/public/images/top.png',
      content: [
        {
          content: '久经考验的反欺诈技术',
          icon: '/public/images/icon_safety_01.png'
        },
        {
          content: '数据源丰富多远新鲜，数据源合规',
          icon: '/public/images/icon_safety_02.png'
        },
        {
          content: '反欺诈规则可自定，灵活多变',
          icon: '/public/images/icon_safety_03.png'
        },
        {
          content: '动态预警业务欺诈风险，及时阻断欺诈操作',
          icon: '/public/images/icon_safety_04.png'
        }
      ]
    }
  },
  creditRating: {
    top: {
      title: '信用评估',
      icon: '/public/images/safety.png',
      content: [
        {
          col: "col-md-6",
          name: '信用评估',
          profile: '源头阻断风险，精准识别和预测欺诈风险，实时提供跨行业、多场景欺诈风险预警。',
          center_icon: '/public/images/thumbnail_2.png',
          background: 'thumbnail background_item_safety',
          crown: false,
          crown_icon: '',
          type: '标准版',
          sub_title: true,
          sub_icon: 'safety-icon standard',
          btn_flag:true,
          btn_group:[
            {
              name: '单一查询',
              link: '/creditRating/search',
              type: 'batch',
              mode: 'standard'
            },
            {
              name: '批量查询',
              link: '/creditRating/batch_search',
              type: 'batch',
              mode: 'standard'
            }
          ]
        },{
          col: "col-md-6",
          name: '信用评估',
          profile: '量身定制属于自己的反欺诈，让风险彻底切断。',
          center_icon: '/public/images/thumbnail_2.png',
          background: 'thumbnail background_item_safety',
          crown: true,
          crown_icon: 'safety-icon honor creditRating_honor',
          type: '详细版',
          sub_title: true,
          sub_icon: 'safety-icon custom-model',
          btn_flag:true,
          btn_group:[
            {
              name: '单一查询',
              link: '/creditRating/customization_search',
              type: 'batch',
              mode: 'standard'
            },
            {
              name: '批量查询',
              link: '/creditRating/customization_batch_search',
              type: 'batch',
              mode: 'standard'
            }
          ]
        }
      ]
    },
    bottom: {
      title: '我们的优势',
      icon: '/public/images/top.png',
      content: [
        {
          content: '模型专家业务经验丰富，精通深度学习算法',
          icon: '/public/images/icon_creditRating_04.png'
        },
        {
          content: '特征值筛选不仅依靠数据，也结合实际业务情况',
          icon: '/public/images/icon_creditRating_03.png'
        },
        {
          content: '结果精确，经过银行、小贷公司的检验',
          icon: '/public/images/icon_creditRating_02.png'
        },
        {
          content: '根据业务，实时跟进，尽善尽美',
          icon: '/public/images/icon_creditRating_01.png'
        }
      ]
    }
  },
  postLoan: {
    top: {
      title: '贷后风险监测',
      icon: '/public/images/safety.png',
      content: [
        {
          col: "col-md-12",
          name: '贷后风险监测',
          profile: '源头阻断风险，精准识别和预测欺诈风险，实时提供跨行业、多场景欺诈风险预警。',
          center_icon: '/public/images/thumbnail_3.png',
          background: 'thumbnail background_item_safety thumbnail-center reverse',
          crown: false,
          crown_icon: '',
          type: '标准版',
          sub_title: false,
          sub_icon: '',
          btn_flag:true,
          btn_group:[
            {
              name: '批量查询',
              link: '/postLoan/batch_search',
              type: 'batch',
              mode: 'standard'
            }
          ]
        }
      ]
    },
    bottom: {
      title: '我们的优势',
      icon: '/public/images/top.png',
      content: [
        {
          content: '海量新鲜数合规数据源',
          icon: '/public/images/icon_postloan_01.png'
        },
        {
          content: '用户画像技术炉火纯青',
          icon: '/public/images/icon_postloan_02.png'
        },
        {
          content: '银行贷后风险专家领队',
          icon: '/public/images/icon_postloan_03.png'
        },
        {
          content: '数据恢复实时安全可靠',
          icon: '/public/images/icon_postloan_04.png'
        }
      ]
    }
  },
  riskOpinion: {
    top: {
      title: '风险舆情',
      icon: '/public/images/safety.png',
      content: [
        {
          col: "col-md-12",
          name: '风险舆情',
          profile: '源头阻断风险，精准识别和预测欺诈风险，实时提供跨行业、多场景欺诈风险预警。',
          center_icon: '/public/images/thumbnail_4.png',
          background: 'thumbnail background_item_safety thumbnail-center reverse',
          crown: false,
          crown_icon: '',
          type: '',
          sub_title: false,
          sub_icon: '',
          btn_flag:true,
          btn_group:[
            {
              name: '单一查询',
              link: '/riskOpinion',
              type: 'batch',
              mode: 'standard'
            }
          ]
        }
      ]
    },
    bottom: {
      title: '我们的优势',
      icon: '/public/images/top.png',
      content: [
        {
          content: '自主知识产权技术，识别多国语言',
          icon: '/public/images/icon_riskopinion_01.png'
        },
        {
          content: '奥运会、世博会、冬奥会的选择',
          icon: '/public/images/icon_riskopinion_02.png'
        },
        {
          content: '千亿级别数据库，特征筛选更精准',
          icon: '/public/images/icon_postloan_01.png'
        },
        {
          content: '一站式服务，解决所有舆情问题',
          icon: '/public/images/icon_riskopinion_04.png'
        }
      ]
    }
  },
  precisionMarketing: {
    top: {
      title: '精准营销',
      icon: '/public/images/safety.png',
      content: [
        {
          col: "col-md-12",
          name: '精准营销',
          profile: '源头阻断风险，精准识别和预测欺诈风险，实时提供跨行业、多场景欺诈风险预警。',
          center_icon: '/public/images/thumbnail_5.png',
          background: 'thumbnail background_item_safety thumbnail-center reverse',
          crown: false,
          crown_icon: '',
          type: '',
          sub_title: false,
          sub_icon: '',
          btn_flag:true,
          btn_group:[
            {
              name:'批量查询',
              link: '/precisionMarketing/batch_search',
              type: 'batch',
              mode: 'standard'
            }
          ]
        }
      ]
    },
    bottom: {
      title: '我们的优势',
      icon: '/public/images/top.png',
      content: [
        {
          content: '银联银行卡消费数据实时送到',
          icon: '/public/images/icon_precisionMarketing_01.png'
        },
        {
          content: '用户消费画像精准刻画',
          icon: '/public/images/icon_postloan_02.png'
        },
        {
          content: '针对不同客户产生特定评价',
          icon: '/public/images/icon_precisionMarketing_03.png'
        },
        {
          content: '数据脱敏不涉及私密',
          icon: '/public/images/icon_precisionMarketing_04.png'
        }
      ]
    }
  }
}

export default {
  data
}
