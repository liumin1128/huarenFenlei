import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import { hashHistory } from 'react-router'

import Transition from 'react-motion-ui-pack'
import Paper from 'material-ui/Paper';
import Location from 'material-ui/svg-icons/communication/location-on'
import Tag from 'material-ui/svg-icons/action/loyalty'
import Clock from 'material-ui/svg-icons/action/schedule'
class Component extends React.Component {
  onClick (id) {
    hashHistory.push('/detail/' + this.props.current + '/' + id)
  }
  render () {
    const { list } = this.props
    return (
        <div styleName='items'>
          <Transition
            component="div"
            enter={{
              opacity: 1
              // translateY: 0
            }}
            leave={{
              opacity: 0
              // translateY: 20
            }}
          >
            {list.map(i =>
              <div key={i.id} styleName='item' onClick={this.onClick.bind(this, i.id)}>
                  <img src={i.picture} styleName='img' alt="" />
                  <div styleName='info'>
                    <h3 styleName='title'>{i.title}</h3>
                    <div styleName='bottom'>
                      <span styleName='city'><Location color='#969696' style={{maxWidth: '14px', maxHeight: '14px'}}/>{i.city}</span>
                      <span styleName='subType'><Tag color='#969696' style={{maxWidth: '14px', maxHeight: '14px'}}/>{i.subType}</span>
                    </div>
                    <span styleName='price'>{i.price}</span>
                    <span styleName='createdAt'><Clock color='#969696' style={{maxWidth: '14px', maxHeight: '14px'}}/>{i.updatedAt}</span>
                  </div>
              </div>
            )}
          </Transition>
            
        </div>
    )
  }
}

Component.defaultProps = {
  list: []
}

export default CSSModules(Component, styles, {allowMultiple: true})
