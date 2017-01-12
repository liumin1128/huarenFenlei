import merge from 'lodash/merge'
import a from '../actionsTypes'

const initState = () => {
  return {
    waiting: true,
    loading: false,
    isEnd: false,
    scrollHeight: 0,
    filters: {},
    orderBy: undefined,
    pagination: {
      page: 1,
      pageSize: 20
    },
    data: [],
    detail: {}
  }
}

const discount = (state = initState(), action) => {
  switch (action.type) {
    case a.init:
      return initState()
    case a.fetch:
      return state
    case a.wait:
      state.waiting = action.val
      return merge({}, state, {})
    case a.loading:
      state.loading = action.val
      return merge({}, state, {})
    case a.isEnd:
      state.isEnd = action.val
      return merge({}, state, {})
    case a.push:
      if (state.pagination.page === 1) {
        state.data = []
        state.data = action.data
      } else {
        state.data = state.data.concat(action.data)
      }
      return merge({}, state, {})
    default:
      return state
  }
}

export default discount

