import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import CommunicationTextsms from 'material-ui/svg-icons/communication/textsms';
import {getTimeAgo} from '../../../../actions/common'
import Waypoint from 'react-waypoint'
import Reply from '../Reply'
class Commment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      info: null,
      createdAt: null,
      show: false
    }
    this.handleWaypointEnter = () => {
      this.setState({show: true})
    }
    this.handleWaypointLeave = () => {
      this.setState({show: false})
    }
    this.reply = this.reply.bind(this);
    
  }
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  reply (id) {
    this.props.reply(id)
  }
  render () {
    const {list, getMore, onSent, blur} = this.props
    return (
        <div styleName='box'>
          <Waypoint
            onEnter={this.handleWaypointEnter}
            onLeave={this.handleWaypointLeave}
          />
          <div styleName={this.state.show ? 'reply in' : 'reply'}>
            <Reply ref='reply' onSent={onSent} blur={blur}/>
          </div>
          <h4 styleName='title'>网友评论</h4>
          {/* 评论列表开始*/}
          <div>
            {list.map((item, index) =>
                <div key={index}>
                  {/* 评论的头部*/}
                  <div>
                    <ListItem
                      leftAvatar={<Avatar
                        src={item.userAvatarUrl}
                        size={45}
                      />}
                      primaryText={item.userNickname}
                      secondaryText={getTimeAgo(item.createdAt)}
                      innerDivStyle={{
                        fontSize: '16px',
                        color: '#333333',
                        letterSpacing: '0px'
                      }}
                      onClick={this.reply.bind(this, {userId: item.user, objId: item.objectId})}
                      rightIcon={
                        <div>
                          <span style={{position: 'absolute', top: '12px', fontSize: '12px', color: '#515151'}}>{item.replyList.length}</span>
                          <IconButton style={{padding: '0px'}}>
                            <CommunicationTextsms style={{width: '20px', height: '20px'}} viewBox='-4 -4 30 30' color='#999' />
                          </IconButton>
                        </div>
                      }
                    />
                  </div>
                  {/* 评论的头部结束*/}
                  <p styleName='replyContent'>
                    {item.content}
                  </p>
                  <div>
                    {item.replyList.map((reply, index) =>
                      <div key={reply.createdAt}>
                        {/* 评论的头部*/}
                        <div>
                          <ListItem
                            leftAvatar={<Avatar
                              src={reply.userAvatarUrl}
                              size={30}
                              style={{marginLeft: '15px', top: '8px'}}
                            />}
                            primaryText={reply.userNickname}
                            // secondaryText={getTimeAgo(reply.createdAt)}
                            innerDivStyle={{
                              fontSize: '16px',
                              color: '#333333',
                              letterSpacing: '0px',
                              paddingTop: '15px',
                              paddingBottom: '15px'
                            }}
                            rightIcon={<span
                              style={{
                                width: 'auto',
                                whiteSpace: 'wrap',
                                fontSize: '10px',
                                color: 'rgba(0, 0, 0, 0.541176)',
                                margin: '10px'
                              }}>
                                {getTimeAgo(reply.createdAt)}
                              </span>
                            }
                          />
                        </div>
                        {/* 评论的头部结束*/}
                        <p styleName='replyContent'>
                          {reply.content}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            {/* 评论开始*/}

            {/* 评论结束*/}
          </div>
          {/* 评论列表结束*/}
          <p styleName="more">
            {list.length === 0 ? <span>暂无评论</span> : (
              (list.length % 5 === 0) ? <span onClick={getMore}>查看更多评论</span> : <span>评论只有这些了</span>
            )}
          </p>
          <Waypoint
              onEnter={this.handleWaypointEnter}
              onLeave={this.handleWaypointLeave}
            />
        </div>
      )
  }
}

export default CSSModules(Commment, styles, {allowMultiple: true})
