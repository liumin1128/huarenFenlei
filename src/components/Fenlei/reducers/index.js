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
    current: '',
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
    case a.waiting:
      state.waiting = action.val
      return merge({}, state, {})
    case a.isEnd:
      state.isEnd = action.val
      return merge({}, state, {})
    case a.loading:
      state.loading = action.val
      return merge({}, state, {})
    case a.setObj:
      // if (action.params.obj === 'current') state.data = []
      state[action.params.obj] = action.params.val
      return merge({}, state, {})
    case a.loading:
      state.loading = action.val
      return merge({}, state, {})
    case a.setFilter:
      // state.loading = action.val
      state.waiting= true;
      state.loading= false;
      state.isEnd= false;
      state.scrollHeight= 0;
      state.orderBy= undefined;
      state.pagination= {
        page: 1,
        pageSize: 20
      }
      state.data = []
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

