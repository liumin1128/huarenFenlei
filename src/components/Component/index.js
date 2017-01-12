import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
class Component extends React.Component {
  render () {
    const { avatarUrl, nickname, createdAt } = this.props
    return (
      <div styleName='box'>
        <h1>component</h1>
      </div>
    )
  }
}

Component.defaultProps = {
  desc: ''
}

export default CSSModules(Component, styles, {allowMultiple: true})
