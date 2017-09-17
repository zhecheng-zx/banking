export default {
  // ids of the items that should be currently displayed based on
  // current list type and current pagination
  activeIds (state) {
    const { activeType, itemsPerPage, lists } = state

    if (!activeType) {
      return []
    }

    const page = Number(state.route.params.page) || 1
    const start = (page - 1) * itemsPerPage
    const end = page * itemsPerPage

    return lists[activeType].slice(start, end)
  },
  activeIndexs (state) {
    const { activeType, lists } = state

    if (!activeType) {
      return []
    }
    return lists[activeType]
  },

  // items that should be currently displayed.
  // this Array may not be fully fetched.
  activeItems (state, getters) {
    return getters.activeIds.map(id => state.items[id]).filter(_ => _)
  },
  activeIndexPage (state, getters) {
    return getters.activeIndexs
  },
  getIsLogin (state) {
    return state.isLogin
  },
  getUserName (state) {
    return state.userName
  }
}
