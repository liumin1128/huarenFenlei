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
export const setScrollHeight = (params) => {
  return {
    type: a.setScrollHeight,
    params
  }
}


