import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import { hashHistory } from 'react-router'

import Transition from 'react-motion-ui-pack'
import Paper from 'material-ui/Paper';
class Component extends React.Component {
  onClick (id) {
    hashHistory.push('/detail/' + id)
  }
  render () {
    const { list } = this.props
    return (
        <div styleName='items'>
          <Transition
            component="div"
            enter={{
              opacity: 1,
              translateY: 0
            }}
            leave={{
              opacity: 0,
              translateY: 20
            }}
          >
            {list.map(i =>
              <div key={i.createdAt} styleName='item' onClick={this.onClick.bind(this, i.id)}>
                <Paper zDepth={1} style={{borderRadius: 0, boxShadow: '0px 0px 2px #ccc'}}>
                  <img src={i.picture} styleName='img' alt="" />
                  <div styleName='info'>
                    <p styleName='title'>{i.title}</p>
                    <p styleName='time'>{i.beginDate + '-' + i.closingDate}</p>
                    <div styleName='price'>
                      <span styleName='x'>${i.price}<span styleName='y'><del>${i.originalPrice}</del></span></span>
                      <span styleName='z'>{i.discount}</span>
                    </div>
                  </div>
                </Paper>
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
