import a from '../actionsTypes'

const discount = (state = {}, action) => {
  switch (action.type) {
    case a.set:
      return action.params
    case a.init:
      return {}
    default:
      return state
  }
}

export default discount

