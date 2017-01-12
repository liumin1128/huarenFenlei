import React from 'react'
import IconButton from 'material-ui/IconButton'
import back from '../../../images/back.svg'
import { hashHistory } from 'react-router'

class Component extends React.Component {
  constructor (props) {
    super(props);
    this.back = () => {
      var urls = this.props.router;
      // 获取上一个地址
      var url = urls[urls.length - 1]
      // 如果上一个页面是发布页，则直接返回主页
      if (Object.prototype.toString.call(url) === '[object String]') {
        if (url.indexOf('release') > -1 || url.indexOf('edite') > -1) url = undefined
      }
      hashHistory.push(url || '/')
      this.props.pop()
    }
  }
  render () {
    return (
      <IconButton onClick={this.back}><img src={back} alt="" /></IconButton>
    )
  }
}

export default Component
