import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import { hashHistory } from 'react-router'
import IconButton from 'material-ui/IconButton'
import petIcon from '../../images/pet.svg'
import businessIcon from '../../images/business.svg'
import carIcon from '../../images/car.svg'
import helpInfoIcon from '../../images/helpInfo.svg'
import houseIcon from '../../images/house.svg'
import otherItemsIcon from '../../images/otherItems.svg'
import serviceIcon from '../../images/service.svg'
import jobsIcon from '../../images/jobs.svg'

const Icon = {
  pet: petIcon,
  business: businessIcon,
  car: carIcon,
  helpInfo: helpInfoIcon,
  house: houseIcon,
  otherItems: otherItemsIcon,
  service: serviceIcon,
  jobs: jobsIcon
}

import { getClassListAndStr } from '../../../../actions/config'
class Component extends React.Component {
  constructor (props) {
    super(props)
    this.goto = (url) => {
      hashHistory.push('/' + url)
    }
  }
  render () {
    const list = getClassListAndStr()
    return (
      <div styleName='box'>
        <div styleName='list'>
          {list.map((i, index) =>
            <div styleName='item' key={i.type}>
              <div styleName='button'>
                <IconButton onClick={this.goto.bind(this, 'fenlei/' + i.type)} style={{width: '100px', height: '100px'}}>
                  <img styleName='icon' src={Icon[i.type]} alt="" />
                </IconButton>
                <p>{i.label}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

Component.defaultProps = {
  desc: ''
}

export default CSSModules(Component, styles, {allowMultiple: true})
