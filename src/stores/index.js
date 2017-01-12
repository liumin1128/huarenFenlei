// require('regenerator-runtime/runtime')
import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import { watchIncrementAsync, watchAndLog, watchSetFilter } from '../components/House/sagas'
import { watchFenleiFetch, watchFenleiSetFilter } from '../components/Fenlei/sagas'
import { watchDetailInit, watchGetComments, watchGetZan, watchGetFavorite, watchZan, watchFavorite, watchComment, watchGetMoreComments } from '../components/HouseDetail/sagas'
import { watchUCLogin } from '../components/UserCenter/sagas'

const sagaMiddleware = createSagaMiddleware()
// const store = createStore(reducers, applyMiddleware(sagaMiddleware))
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watchIncrementAsync)
sagaMiddleware.run(watchAndLog)
sagaMiddleware.run(watchSetFilter)
sagaMiddleware.run(watchDetailInit)

sagaMiddleware.run(watchGetComments)
sagaMiddleware.run(watchGetZan)
sagaMiddleware.run(watchGetFavorite)
sagaMiddleware.run(watchZan)
sagaMiddleware.run(watchFavorite)
sagaMiddleware.run(watchComment)
sagaMiddleware.run(watchGetMoreComments)

sagaMiddleware.run(watchUCLogin)

sagaMiddleware.run(watchFenleiFetch)
sagaMiddleware.run(watchFenleiSetFilter)


export default store
