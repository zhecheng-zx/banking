import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')
const CreateIndexView = obj => () => import('../views/CreateIndexView').then(m => m.default(obj))

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/index', component: CreateIndexView({ 'id': 'index', 'title': '首页'})},
      { path: '/antiFraud', component: CreateIndexView({ 'id': 'antiFraud', 'title': '反欺诈'})},
      { path: '/creditRating', component: CreateIndexView({ 'id': 'creditRating', 'title': '信用评估'})},
      { path: '/top/:page(\\d+)?', component: createListView('top') },
      { path: '/new/:page(\\d+)?', component: createListView('new') },
      { path: '/show/:page(\\d+)?', component: createListView('show') },
      { path: '/ask/:page(\\d+)?', component: createListView('ask') },
      { path: '/job/:page(\\d+)?', component: createListView('job') },
      { path: '/item/:id(\\d+)', component: ItemView },
      { path: '/user/:id', component: UserView },
      { path: '/', redirect: '/index' }
    ]
  })
}
