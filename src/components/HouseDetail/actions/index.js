import a from '../actionsTypes'

export const init = (params) => {
  return {
    type: a.init,
    params
  }
}

export const zan = (params) => {
  return {
    type: a.zan,
    params
  }
}

export const favorite = (params) => {
  return {
    type: a.favorite,
    params
  }
}

export const comment = (params) => {
  return {
    type: a.comment,
    params
  }
}

export const getMoreComments = (params) => {
  return {
    type: a.getMoreComments,
    params
  }
}



