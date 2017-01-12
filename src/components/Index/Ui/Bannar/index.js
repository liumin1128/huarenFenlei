import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Slider from '../../../Ui/SimpleSlider'
import bannarPictures1 from '../../images/banar/1.jpg'
import bannarPictures2 from '../../images/banar/2.jpg'

class Component extends React.Component {
  render () {
    return (
      <div styleName='box'>
        <Slider>
          <div key={0} styleName='item'>
            <img src={bannarPictures1} alt="" />
          </div>
          <div key={1} styleName='item'>
            <img src={bannarPictures2} alt="" />
          </div>
        </Slider>
      </div>
    )
  }
}

Component.defaultProps = {
  desc: ''
}

export default CSSModules(Component, styles, {allowMultiple: true})
