import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import {List, ListItem} from 'material-ui/List';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
class Component extends React.Component {
  render () {
    const { list } = this.props
    console.log(list)
    return (
      <div styleName='box'>
        <List>
          {list.map((i,index) =>
            <ListItem
              key={i.text + index}
              primaryText={i.text}
              innerDivStyle={{padding: '12px 12px 12px 55px', color: '#757575', fontSize: '15px'}}
              leftIcon={i.icon} />
          )}
        </List>
      </div>
    )
  }
}

Component.defaultProps = {
  list: []
}

export default CSSModules(Component, styles, {allowMultiple: true})
