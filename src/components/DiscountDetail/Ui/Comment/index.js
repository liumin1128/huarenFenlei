import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import no from '../../../../images/no-avatar.jpg'
import IconButton from 'material-ui/IconButton';

import thumber from '../../../../images/thumber.svg'
import comment from '../../../../images/comment.svg'
class Component extends React.Component {
  render () {
    const { avatarUrl, nickname, createdAt } = this.props
    return (
      <div styleName='box'>
        <h3 styleName='title'>评论<span>（5）</span></h3>
        <div>
          <div>
            <hr styleName='hr' />
            <div styleName='comment'>
              <div styleName='top'>
                <img styleName='avatar' src={no} alt="" />
                <p styleName='nickname'>{nickname}</p>
                <span styleName='createdAt'>{createdAt}</span>
              </div>
              <div styleName="content"><p>第一次吃羊蹄筋火锅，味道很棒，喜欢羊蹄筋软软
                劲道的口味，本来想要加小料的，服务很周道...</p>
                <div styleName='pictures'>
                  <img src="../../../../images/1.png" alt="" />
                  <img src="../../../../images/2.png" alt="" />
                  <img src="../../../../images/3.png" alt="" />
                </div>
              </div>
              <div styleName="foot">
                <IconButton><img src={thumber} alt="" /></IconButton>
                <span>0</span>
                <IconButton><img src={comment} alt="" /></IconButton>
                <span>0</span>
              </div>
            </div>
          </div>
          <div>
            <hr styleName='hr' />
            <div styleName='comment'>
              <div styleName='top'>
                <img styleName='avatar' src={no} alt="" />
                <p styleName='nickname'>{nickname}</p>
                <span styleName='createdAt'>{createdAt}</span>
              </div>
              <div styleName="content"><p>第一次吃羊蹄筋火锅，味道很棒，喜欢羊蹄筋软软
                劲道的口味，本来想要加小料的，服务很周道...</p>
                <div styleName='pictures'>
                  <img src="../../../../images/1.png" alt="" />
                  <img src="../../../../images/2.png" alt="" />
                  <img src="../../../../images/3.png" alt="" />
                </div>
              </div>
              <div styleName="foot">
                <IconButton><img src={thumber} alt="" /></IconButton>
                <span>0</span>
                <IconButton><img src={comment} alt="" /></IconButton>
                <span>0</span>
              </div>
            </div>
          </div>
          <div>
            <hr styleName='hr' />
            <div styleName='comment'>
              <div styleName='top'>
                <img styleName='avatar' src={no} alt="" />
                <p styleName='nickname'>{nickname}</p>
                <span styleName='createdAt'>{createdAt}</span>
              </div>
              <div styleName="content"><p>第一次吃羊蹄筋火锅，味道很棒，喜欢羊蹄筋软软
                劲道的口味，本来想要加小料的，服务很周道...</p>
                <div styleName='pictures'>
                  <img src="../../../../images/1.png" alt="" />
                  <img src="../../../../images/2.png" alt="" />
                  <img src="../../../../images/3.png" alt="" />
                </div>
              </div>
              <div styleName="foot">
                <IconButton><img src={thumber} alt="" /></IconButton>
                <span>0</span>
                <IconButton><img src={comment} alt="" /></IconButton>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        <div styleName="more">
          显示更多评论
        </div>
      </div>
    )
  }
}

Component.defaultProps = {
  desc: ''
}

export default CSSModules(Component, styles, {allowMultiple: true})
