import { getFenleiListCloud } from '../../../actions/server.js'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import a from '../actionsTypes'
import { formatList } from '../format'
import merge from 'lodash/merge'

export function* fetchData(action) {
   try {

      const params = merge(action.params)

      // 如果请求第一页，则初始化store
      if (params.page === 1) {
        yield put({type: a.init});
      }

      // 获取数据
      const data = yield call(getFenleiListCloud, params)

      // 如果数据长度小于20（一次请求量），则通知store，isEnd
      if (data.length < 20) {
        yield put({type: a.isEnd, val: true});
      }

      // 如果有请求到的数据，则加入列表中
      if (data.length != 0) {
        yield put({type: a.push, data: formatList(data)});
      }

      // waiting 动画结束
      yield put({type: a.waiting, val: false});

   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* watchFenleiFetch() {
  yield* takeEvery(a.fetch, fetchData)
}

export function* watchFenleiSetFilter() {
  yield* takeEvery(a.setFilter, fetchData)
}

