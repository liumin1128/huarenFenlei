import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Avatar from 'material-ui/Avatar'
class SelectOne extends React.Component {
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  render () {
    const {avatarUrl, nickname, tel} = this.props
    return (
        <div styleName='box'>
          <Avatar
            src={avatarUrl}
            size={74}
          />
          <p styleName='info'>
            <span styleName='nickname'>{nickname}</span>
            <span styleName='tel'>{tel}</span>
          </p>
        </div>
      )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
