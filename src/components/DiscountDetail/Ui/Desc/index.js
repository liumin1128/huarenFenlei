import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
class Component extends React.Component {
  render () {
    const { desc } = this.props
    return (
      <div styleName='box'>
        <h3 styleName='title'>详情描述：</h3>
        <hr styleName='hr' />
        <p styleName='content'>{desc}</p>
      </div>
    )
  }
}

Component.defaultProps = {
  desc: ''
}

export default CSSModules(Component, styles, {allowMultiple: true})
