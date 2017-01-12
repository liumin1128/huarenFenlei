import a from './actionsTypes'

export const alert = (params) => {
  return {
    type: a.alert,params
  }
}

export const close = () => {
  return {
    type: a.close
  }
}

