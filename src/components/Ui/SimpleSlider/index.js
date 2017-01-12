import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Slider from 'react-slick'

// require('slick-carousel/slick/slick-theme.css');
require('./slider.css')

class Component extends React.Component {
  render () {
    const { children } = this.props
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 300,
      arrows: false
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // dotsClass: 'slick-dots'
    }
    return (
      <div styleName='box'>
          <Slider key={0} {...settings} style={{height: 100}}>
            {children}
          </Slider>
      </div>
    )
  }
}

export default CSSModules(Component, styles, {allowMultiple: true})
