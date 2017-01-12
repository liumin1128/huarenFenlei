import a from '../actionsTypes'
export const set = (params) => {
  return {
    type: a.set,
    params
  }
}
export const init = () => {
  return {
    type: a.init
  }
}




