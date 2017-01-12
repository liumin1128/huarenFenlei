import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ModalAlert from '../../../Ui/ModalAlert'

class Component extends React.Component {
  render () {
    const { price, originalPrice, discount, title } = this.props
    return (
      <div styleName='box'>
        <div styleName='price'>
          <span styleName='x'>${price}<span styleName='y'><del>${originalPrice}</del></span></span>
          <span styleName='z'>{discount}</span>
        </div>
        <h1 styleName='title'>{title}</h1>
        <div styleName='favorite'>
          <ModalAlert
            key={2}
            title='确认下载？'
            body={
              <div>
                <p style={{lineHeight: '2em'}}>
                  如需收藏打折信息，需下载华人生活app。
                  点击确认即可下载。
                </p>
              </div>
            }
            submitLabel='确认'
            cancelLabel='取消'
          >
            <Checkbox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              iconStyle={{marginRight: 0}}
              style={{width: '24px', height: '24px'}}
              // inputStyle={{width: 0, height: 0, background: 'red'}}
            />
            <p>收藏</p>
          </ModalAlert>
        </div>
      </div>
    )
  }
}

export default CSSModules(Component, styles, {allowMultiple: true})
