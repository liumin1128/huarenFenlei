import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import TopBar from '../Ui/TopBar'
import Hr from '../Ui/Hr'
import Back from '../Ui/Back/containers'
import RaisedButton from 'material-ui/RaisedButton';
import Headroom from 'react-headroom'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import { Link } from 'react-router'
import release from './images/edite.svg'
import noavatar from './images/user.svg'
import { requireSign } from '../../actions/server'
class UserCenter extends React.Component {
  constructor (props) {
    super(props);
    this.login = () => {
      window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd6f456f55dc3f602&redirect_uri=http%3A%2F%2Fstg-huarenlife.leanapp.cn%2FinfoListWxService&response_type=code&scope=snsapi_userinfo&state=123&connect_redirect=1#wechat_redirect'
    }
  }
  componentDidMount () {
    if ( !requireSign() ) {
      this.props.alert({
        title: '您尚未登陆，是否立即登录？',
        cancelLabel: '取消',
        callback: function () {
            window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd6f456f55dc3f602&redirect_uri=http%3A%2F%2Fstg-huarenlife.leanapp.cn%2FinfoListWxService&response_type=code&scope=snsapi_userinfo&state=123&connect_redirect=1#wechat_redirect'
        },
        submitLabel: '立即登录'
      })
    }
  }
  render () {
    const { user, logout } = this.props
    return (
      <div styleName='box'>
        <Headroom>
          <TopBar title='个人中心' left={
              <Back />
            } right={[
              <IconButton key={2} iconStyle={{width: '100%'}}><img src={release} alt="" /></IconButton>
          ]}/>
        </Headroom>
        <div styleName='uc'>
          { user.avatarUrl ? <div styleName='userinfo'>
            <Avatar size={100} src={user.avatarUrl} backgroundColor='#fff' />
            <h3>{user.nickname}</h3>
          </div> : <div styleName='userinfo'>
            <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd6f456f55dc3f602&redirect_uri=http%3A%2F%2Fstg-huarenlife.leanapp.cn%2FinfoListWxService&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect">
              <Avatar size={100} src={noavatar} backgroundColor='#fff' />
            </a>
          </div>}
          <Hr />
          <div styleName='itemsBox'>
            <div styleName='items'>
              <div styleName='item'>
                <Link to='/mypost'><IconButton key={2} iconStyle={{width: '100%'}}><img src={release} alt="" /></IconButton>
                <p>我的发布</p></Link>
              </div>
              <div styleName='item'>
                <Link to='/favorite'><IconButton key={2} iconStyle={{width: '100%'}}><img src={release} alt="" /></IconButton>
                <p>我的收藏</p></Link>
              </div>
              <div styleName='item'>
                <Link to='/favorite'><IconButton key={2} iconStyle={{width: '100%'}}><img src={release} alt="" /></IconButton>
                <p>消息中心</p></Link>
              </div>
            </div>
            <div styleName='button'>
              {user.avatarUrl ?
                <RaisedButton onClick={logout} label='注销登录' backgroundColor='#ccc' labelColor='#fff' style={{width: '100%'}} /> :
                <RaisedButton onClick={this.login} label='立即登录' backgroundColor='#58cc7c' labelColor='#fff' style={{width: '100%'}} />
              }
            </div>
          </div>
          <Hr />
        </div>
      </div>
    )
  }
}

export default CSSModules(UserCenter, styles, {allowMultiple: true})
