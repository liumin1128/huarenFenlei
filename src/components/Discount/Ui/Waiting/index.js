import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'

class Component extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
        <div styleName={this.props.show ? 'waiting' : 'waiting hide'}>
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
        </div>
    )
  }
}

Component.defaultProps = {
  show: false
}

export default CSSModules(Component, styles, {allowMultiple: true})
