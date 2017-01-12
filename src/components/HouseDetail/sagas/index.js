import { getFenleiDetail, getComment, getZanCount, getZanStatus, getFavoriteCount, getFavoriteStatus, zan, favorite, addComment } from '../../../actions/server.js'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import a from '../actionsTypes'
import { formatInfo } from '../format'
import merge from 'lodash/merge'

export function* fetchData(action) {
   try {
      const params = merge(action.params)
      const data = yield call(getFenleiDetail, params)
      yield put({type: a.set, obj: 'info', data: formatInfo(data[0])})
      yield put({type: a.getComments, params: {
          page: 1,
          pageSize: 5,
          item: params.id
      }})
      yield put({type: a.getZan, params: params})
      yield put({type: a.getFavorite, params: params})
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* initComments(action) {
   try {
      const data = yield call(addComment, action.params)
      console.log(data)
      if (data.code === 200) {
        yield put({type: a.getComments, params: {
            page: 1,
            pageSize: 5,
            item: action.params.id
        }})
      }
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* getMoreComments(action) {
   try {
      // const data = yield call(addComment, action.params)
      // console.log(data)
      console.log(action.params)
      const data = yield call(getComment, {
        page: action.params.page,
        pageSize: action.params.pageSize,
        item: action.params.id
      })
      yield put({type: a.getMore, obj: 'comments', data: {
        page: action.params.page,
        pageSize: action.params.pageSize,
        data: data
      }})
      // yield put({type: a.getComments, params: {
      //     page: 1,
      //     pageSize: 5,
      //     item: action.params.id
      // }})
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* getComments(action) {
   try {
      const params = merge(action.params)
      // console.log(params)
      const data = yield call(getComment, params)
      yield put({type: a.set, obj: 'comments', data: {
        page: 1,
        pageSize: 5,
        data: data
      }})
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* getZan(action) {
   try {
      const params = merge(action.params)
      // console.log(params)
      const [status, count] = yield [
        call(getZanStatus, params.id),
        call(getZanCount, params.id)
      ]
      // console.log(status.code === 200 ? true : false, count)
      yield put({type: a.set, obj: 'zan', data: {
        status: status.code === 200 ? false : true,
        count: count
      }})
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* getFavorite(action) {
   try {
      const params = merge(action.params)
      // console.log(params)
      const [status, count] = yield [
        call(getFavoriteStatus, params.id),
        call(getFavoriteCount, params.id)
      ]
      // console.log(status.code === 200 ? true : false, count)
      yield put({type: a.set, obj: 'favorite', data: {
        status: status.code === 200 ? false : true,
        count: count
      }})
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* onZan(action) {
   try {
      const params = merge(action.params)
      const data = yield call(zan, params.id)
      yield put({type: a.getZan, params: params})
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}

export function* onFavorite(action) {
   try {
      const params = merge(action.params)
      const data = yield call(favorite, params.id)
      yield put({type: a.getFavorite, params: params})
   } catch (error) {
      yield put({type: 'DISCOUNT_FETCH_FAILED', error});
   }
}


export function* watchDetailInit() {
  yield* takeEvery(a.init, fetchData)
}

export function* watchGetComments() {
  yield* takeEvery(a.getComments, getComments)
}

export function* watchGetZan() {
  yield* takeEvery(a.getZan, getZan)
}

export function* watchGetFavorite() {
  yield* takeEvery(a.getFavorite, getFavorite)
}

export function* watchZan() {
  yield* takeEvery(a.zan, onZan)
}

export function* watchFavorite() {
  yield* takeEvery(a.favorite, onFavorite)
}

export function* watchComment() {
  yield* takeEvery(a.comment, initComments)
}

export function* watchGetMoreComments() {
  yield* takeEvery(a.getMoreComments, getMoreComments)
}
