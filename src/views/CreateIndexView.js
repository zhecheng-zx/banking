/**
 * Created by zhangxin on 2017/8/30.
 */
import Index from './Index.vue'

// const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)
// 这是一个用于动态创建根级列表视图的工厂函数，
// 因为除了要显示的项目类型外，它们共享大部分逻辑。
// 它们本质上是包装itemlist.vue的更高阶组件。
export default function createIndexView (obj) {
  return {
    name: `${obj.id}-stories-view`,

    // 暂时不需要请求数据
    asyncData ({ store }) {
      return store.dispatch('INDEX_SETUP_FILE', { type: obj.id })
    },

    title: obj.title,

    render (h) {
      let type = obj.id
      return h(Index, { props: { type }})
    }
  }
}
