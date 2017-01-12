import { getFenleiListCloud } from '../../../actions/server.js'
import { takeEvery } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import a from '../actionsTypes'
import { formatList } from '../format'
import merge from 'lodash/merge'

export function* fetchData(action) {
   try {
      const params = merge(action.params)
      const data = yield call(getFenleiListCloud, params)
      
      if (data.length === 0) {
        yield put({type: a.isEnd, val: true});
      } else {
        yield put({type: a.push, data: formatList(data)});
      }

      yield put({type: a.wait, val: false});
      // yield put({type: a.loading, val: false});
   } catch (error) {
      console.log(error)
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* watchIncrementAsync() {
  yield* takeEvery(a.fetch, fetchData)
}

export function* watchAndLog(getState) {
  while(true) {
    const action = yield take('*')
    console.log('action', action)
    console.log('state after', getState)
  }
}

// // 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
// export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// // Our worker Saga: 将异步执行 increment 任务
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

