import dropRight from 'lodash/dropRight'
const router = (state = [], action) => {
  switch (action.type) {
    case 'ROUTER_PUSH':
      return state.concat(action.data)
    case 'ROUTER_POP':
      return dropRight(state, 2)
    default:
      return state
  }
}

export default router

