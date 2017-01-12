import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'

class TopBar extends React.Component {
  render () {
    const { left, title, right } = this.props
    return (
      <div styleName='box'>
        <h1>{title}</h1>
        <span>{left}</span>
        <span>{right}</span>
      </div>
    )
  }
}

export default CSSModules(TopBar, styles, {allowMultiple: true})
