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
    return (
        <div styleName={this.props.show && this.state.loading ? 'loading' : 'loading hide'}>
          <Waypoint
            onEnter={this.handleWaypointEnter}
            onLeave={this.handleWaypointLeave}
          />
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
    )
  }
}

Component.defaultProps = {
  list: []
}

export default CSSModules(Component, styles, {allowMultiple: true})
