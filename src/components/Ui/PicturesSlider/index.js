import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Slider from 'react-slick'

// require('slick-carousel/slick/slick-theme.css');
require('./slider.css')

let img = require('../../../images/2.jpg');

class Component extends React.Component {
  render () {
    const { pictures } = this.props
    var settings = {
      dots: true,
      infinite: false,
      speed: 300,
      arrows: false
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // dotsClass: 'slick-dots'
    }
    return (
      <div styleName='box'>
          <Slider key={0} {...settings} style={{height: 100}}>
            {pictures && pictures.map(img =>
              <img src={img} key={img} alt=""/>
            )}
          </Slider>
      </div>
    )
  }
}

export default CSSModules(Component, styles, {allowMultiple: true})
