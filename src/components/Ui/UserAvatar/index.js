import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import img from '../../UserCenter/images/user.svg'
import { gotoUrl } from '../../../actions/common'
class Component extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { user } = this.props
    console.log(user)
    return (
      <IconButton onClick={gotoUrl.bind(this, 'me')}>
        <Avatar size={25} src={user.avatarUrl || img} />
      </IconButton>
      
    )
  }
}

export default CSSModules(Component, styles, {allowMultiple: true})
