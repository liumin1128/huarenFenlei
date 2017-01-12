import { getUserInfo, logout } from '../../../actions/server.js'
import { takeEvery } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import a from '../actionsTypes'
import merge from 'lodash/merge'

export function* loginSetUserInfo(action) {
   try {
      const data = yield call(getUserInfo)
      console.log(data)
      if (data.code === 403) {
        logout()
          // window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd6f456f55dc3f602&redirect_uri=http%3A%2F%2Fstg-huarenlife.leanapp.cn%2FinfoListWxService&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect'
      } else {
        yield put({type: a.set, data});
      }
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* watchUCLogin() {
  yield* takeEvery(a.login, loginSetUserInfo)
}


