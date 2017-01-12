import a from '../actionsTypes'
export const fetch = (params) => {
  return {
    type: a.fetch,
    params
  }
}
export const setFilter = (params) => {
  return {
    type: a.setFilter,
    params
  }
}
export const setObj = (params) => {
  return {
    type: a.setObj,
    params
  }
}


