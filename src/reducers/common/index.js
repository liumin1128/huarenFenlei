import a from './actionsTypes'
import merge from 'lodash/merge'

const initState = () => {
    return {
        alert: {
            open: false,
            message: '',
            title: '',
            cancelLabel: '',
            submitLabel: '',
            callback: undefined
        }
    }
}

const discount = (state = initState(), action) => {
  switch (action.type) {
    case a.alert:
        state.alert = {
            open: true,
            title: action.params.title,
            message: action.params.message,
            cancelLabel: action.params.cancelLabel,
            submitLabel: action.params.submitLabel,
            callback: action.params.callback
        }
      return merge({}, state, {})
    case a.close:
      return initState()
    default:
      return state
  }
}

export default discount

