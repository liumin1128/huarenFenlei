import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { Provider } from 'react-redux'
import store from './stores'
// store.dispatch({type: 'UC_LOGIN'})
import AV from 'leancloud-storage';

if (AV.User.current()) {
  console.log('用户已登陆，获取用户信息')
  store.dispatch({type: 'UC_LOGIN'})
}
import House from './components/House/containers'
import Index from './components/Index/containers'
import UserCenter from './components/UserCenter/containers'
import HouseDetail from './components/HouseDetail/containers'
import Favorite from './components/Favorite'
import MyPost from './components/MyPost/containers'
import Release from './components/Release/containers/release'
import Edite from './components/Release/containers/edite'

import Fenlei from './components/Fenlei/containers'

import { login, requireSign } from './actions/server'

document.getElementById('loading').style.display = 'none'

const triggerEnter = (nextState, replace) => {}
const triggerLeave = (nextState, replace) => {
    store.dispatch({type: 'ROUTER_PUSH', data: nextState.location.pathname})
}
const wxsign = (nextState, replace) => {
    var params = {
        'access_token': nextState.location.query.accesstoken,
        'refresh_token': nextState.location.query.refreshtoken,
        'openid': nextState.location.query.openid,
        'unionid': nextState.location.query.unionid
    }
    login(params).then(loginedUser => {
        console.log(loginedUser)
        console.log('loginedUser登录成功')
        store.dispatch({type: 'UC_LOGIN'})
        hashHistory.push('/')
    })
}
const requireUserSign = (nextState, replace) => {
    if (!AV.User.current()) {
        replace({ pathname: '/me'})
    }
}
    
ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory }>
            <Route path="/" component={App}>
                <IndexRoute component={Index} onEnter={triggerEnter} onLeave={triggerLeave}/>
                <Route path="/index" component={ Index } onEnter={triggerEnter} onLeave={triggerLeave}/>
                <Route path="/fenlei/house" component={ House } onEnter={triggerEnter} onLeave={triggerLeave}/>
                <Route path="/fenlei/:fenleiType" component={ Fenlei } onEnter={triggerEnter} onLeave={triggerLeave}/>
                <Route path="/me" component={ UserCenter } onEnter={triggerEnter} onLeave={triggerLeave}/>
                <Route path="/sign" component={ Index } onEnter={wxsign} onLeave={triggerLeave}/>
                <Route path="/favorite" component={ Favorite } onEnter={requireUserSign} onLeave={triggerLeave}/>
                <Route path="/mypost" component={ MyPost } onEnter={requireUserSign} onLeave={triggerLeave}/>
                <Route path="/release/:type" component={ Release } onEnter={requireUserSign} onLeave={triggerLeave}/>
                <Route path="/edite/:type/:id" component={ Edite } onEnter={requireUserSign} onLeave={triggerLeave}/>
                <Route path="/detail/:type/:id" component={ HouseDetail } onEnter={triggerEnter} onLeave={triggerLeave}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'))
