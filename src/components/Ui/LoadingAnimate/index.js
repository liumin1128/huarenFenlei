import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
class Component extends React.Component {
  render () {
    return (
      <div styleName='box'>
        <div styleName="container">
          <div styleName="stick"></div>
          <div styleName="stick"></div>
          <div styleName="stick"></div>
          <div styleName="stick"></div>
          <div styleName="stick"></div>
          <div styleName="stick"></div>
        </div>
        <h1>waiting...</h1>
        
      </div>
    )
  }
}

export default CSSModules(Component, styles, {allowMultiple: true})
