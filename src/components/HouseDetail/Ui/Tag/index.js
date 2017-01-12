import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import {List, ListItem} from 'material-ui/List'
import ActionLoyalty from 'material-ui/svg-icons/action/loyalty'
import ActionRoom from 'material-ui/svg-icons/action/room'
import CommunicationCall from 'material-ui/svg-icons/communication/call'

const ListItemInnerDivStyle = {
  fontSize: '15px',
  color: '#333',
  padding: '13px 13px 13px 50px',
  fontWeight: '100'
}

class SelectOne extends React.Component {
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  render () {
    const {city, subType, tel, location} = this.props
    return (
        <div styleName='box'>
          <div styleName='tag'>
            <ActionRoom style={{margin: '9px'}} color='#ABABAB' />
            <p>{(location || '' + ' ') + city}</p>
          </div>
          <div styleName='tag'>
            <ActionLoyalty style={{margin: '9px'}} color='#ABABAB' />
            <p>{subType}</p>
          </div>
          <div styleName='tag'>
            <CommunicationCall style={{margin: '9px'}} color='#ABABAB' />
            <p>{tel}</p>
          </div>
        </div>
      )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
