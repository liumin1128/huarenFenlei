import a from '../actionsTypes'
export const fetch = (params) => {
  return {
    type: a.fetch,
    params
  }
}


