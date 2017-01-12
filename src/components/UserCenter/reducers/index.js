import a from '../actionsTypes'
import { logout } from '../../../actions/server'
const discount = (state = {}, action) => {
  switch (action.type) {
    case a.set:
      return action.data
    case a.logout:
      logout()
      return {}
    default:
      return state
  }
}

export default discount

