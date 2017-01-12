import merge from 'lodash/merge'
import a from '../actionsTypes'

const initState = () => {
  return {
    info: null,
    zan: {
      status: false,
      count: 0
    },
    favorite: {
      status: false,
      count: 0
    },
    createdAt: null,
    user: null,
    replyTo: null,
    replyToId: undefined,
    comments: {
      page: 1,
      pageSize: 5,
      data: []
    }
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
    case a.set:
      state[action.obj] = action.data
      return merge({}, state, {})
    case a.getMore:
      state[action.obj].page =action.data.page
      state[action.obj].pageSize =action.data.pageSize
      state[action.obj].data = state[action.obj].data.concat(action.data.data)
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

