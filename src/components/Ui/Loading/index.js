import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import Waypoint from 'react-waypoint'

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    this.handleWaypointEnter = () => {
      this.props.loading()
      this.setState({loading: true})
    }
    this.handleWaypointLeave = () => {
      this.setState({loading: false})
    }
  }
  render () {
    const {isEnd, show} = this.props
    return (
        <div styleName={show && this.state.loading ? 'box' : 'box hide'}>
          <Waypoint
            onEnter={this.handleWaypointEnter}
            onLeave={this.handleWaypointLeave}
          />
          <div styleName={isEnd ? 'isEnd' : 'none'}>
            没有更多数据啦
          </div>
          <div styleName={isEnd ? 'none' : 'loading'}>
            <RefreshIndicator
              size={48}
              left={10}
              top={0}
              status="loading"
              loadingColor="#58cc7c"
              style={{
                position: 'relative',
                transform: 'none',
                top: 0,
                left: 0
              }}
            />
          </div>
          
        </div>
    )
  }
}

Component.defaultProps = {
  list: []
}

export default CSSModules(Component, styles, {allowMultiple: true})
