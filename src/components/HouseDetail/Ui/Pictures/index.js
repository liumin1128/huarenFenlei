import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Slider from '../../../Ui/PicturesSlider'
import Checkbox from 'material-ui/Checkbox'
import favoriteIcon from '../../images/favorite.svg'
import favoritedIcon from '../../images/favorited.svg'
class SelectOne extends React.Component {
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  render () {
    const {pictures} = this.props
    return (
        <div styleName='box'>
          <Slider pictures={pictures} />

        </div>
      )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
