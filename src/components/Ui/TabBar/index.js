import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import {Tabs, Tab} from 'material-ui/Tabs';
import { getTabStr } from '../../../actions/config'
class TabBar extends React.Component {
  constructor (props) {
    super(props)
    this.onActive = (e) => {
      // console.log(e.props.label)
      // console.log(e.props.value)
      this.props.onChange(this.props.obj, e.props.value)
    }
  }
  render () {
    return (
      <div styleName='box'>
        <div>
          <Tabs
            ref='tab'
            style={{overflow: 'scroll', width: '100%'}}
            tabTemplateStyle={{color: 'red'}}
            inkBarStyle={{background: '#58cc7c'}}
            tabItemContainerStyle={{background: '#fff', width: '170%'}}
          >
            {
              getTabStr().map((i, index) =>
                <Tab onActive={this.onActive} style={{color: '#757575'}} key={index} label={i} value={i}></Tab>
              )
            }
          </Tabs>
        </div>
      </div>
    )
  }
}

export default CSSModules(TabBar, styles, {allowMultiple: true})
