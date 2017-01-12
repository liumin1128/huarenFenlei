import AV from 'leancloud-storage';
const APP_ID = '1YOzW8ToJj20OitkVTTizDdY-gzGzoHsz';
const APP_KEY = 'WzjuAnpkHYpkVhoPGfdcO9FU';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
AV.setProduction(false);

export const requireSign = () => {
  var user = AV.User.current()
  console.log(user)
  return user
}

export const getFenleiListCloud = (params) => {
  const paramsJson = {
    page: params.page,
    pageSize: params.pageSize,
    subType: params.subType,
    city: params.city
  }
  return AV.Cloud.run('info_list_' + params.type, paramsJson)
}

export const getFenleiDetail = (params) => {
  return AV.Cloud.run('info_list_' + params.type, params)
}

export const getComment = (params) => {
  return AV.Cloud.run('info_list_commentList', params)
}

export const addFenlei = (params) => {
  return AV.Cloud.run('info_list_add', params)
}

export const updateFenlei = (params) => {
  return AV.Cloud.run('info_list_update', params)
}

export const login = (params) => {
  return AV.User.signUpOrlogInWithAuthData(params, 'weixin')
}

export const logout = () => {
  AV.User.logOut()
}

export const getUserInfo = () => {
  return AV.User.current().attributes
  // return AV.User.current().attributes
}


export const addComment = (params) => {
  const paramsJson = {
    item: params.id,
    content: params.content,
    reply: params.reply
  }
  return AV.Cloud.run('info_list_addComment', paramsJson)
}

export const getUser = (ids, callback) => {
  const paramsJson = {
    ids: ids
  }
  AV.Cloud.run('info_list_getUser', paramsJson).then(function (data) {
    callback(data)
  }, function (error) {
    console.log(error)
  })
}

export const getZanCount = (id) => {
  const paramsJson = {
    item: id
  }
  return AV.Cloud.run('info_list_zanCount', paramsJson)
}

export const getZanStatus = (id) => {
  const paramsJson = {
    item: id
  }
  return AV.Cloud.run('info_list_zanStatus', paramsJson)
}

export const getFavoriteCount = (id) => {
  const paramsJson = {
    item: id
  }
  return AV.Cloud.run('info_list_favoriteCount', paramsJson)
}

export const getFavoriteStatus = (id) => {
  const paramsJson = {
    item: id
  }
  return AV.Cloud.run('info_list_favoriteStatus', paramsJson)
}

export const zan = (id) => {
  const paramsJson = {
    item: id
  }
  return AV.Cloud.run('info_list_zan', paramsJson)
}

export const favorite = (id) => {
  const paramsJson = {
    item: id
  }
  return AV.Cloud.run('info_list_favorite', paramsJson)
}

export const commentReadStatus = (callback) => {
  AV.Cloud.run('info_list_commentReadStatus').then(function (data) {
    callback(data)
  }, function (error) {
    console.log(error)
  })
}

export const favoriteList = (page, pageSize) => {
  const paramsJson = {
    page: page || 1,
    pageSize: pageSize || 1000
  }
  return AV.Cloud.run('info_list_favoriteList', paramsJson)
}

export const myPostList = (id, page, pageSize) => {
  const paramsJson = {
    id: id || undefined,
    page: page || 1,
    pageSize: pageSize || 1000
  }
  return AV.Cloud.run('info_list_myPost', paramsJson)
}

export const deleteMyPost = (id) => {
  const paramsJson = {
    id: id
  }
  return AV.Cloud.run('info_list_delete', paramsJson)
}

export const updateMyPost = (paramsJson) => {
  return AV.Cloud.run('info_list_update', paramsJson)
}

export const CommentReadStatusList = (page, pageSize) => {
  const paramsJson = {
    page: page || 1,
    pageSize: pageSize || 1000
  }
  return AV.Cloud.run('info_list_commentReadStatusList', paramsJson)
}

export const UpdateCommentReadStatus = (id) => {
  const paramsJson = {
    comment: id
  }
  return AV.Cloud.run('info_list_updateCommentReadStatus', paramsJson)
}
