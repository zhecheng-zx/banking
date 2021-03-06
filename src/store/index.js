import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      userName: '',
      isLogin: false,
      activeType: null,
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        index: [],
        antiFraud: [],
        creditRating: [],
        postLoan: [],
        riskOpinion: [],
        precisionMarketing: [],
        accountManager: [],
        APIManager: [],
        searchLog: [],
        safetyInfo: [],
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    actions,
    mutations,
    getters
  })
}
