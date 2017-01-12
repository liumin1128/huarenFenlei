import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import zanIcon from '../../images/zan.svg'
import zanedIcon from '../../images/zaned.svg'
import Checkbox from 'material-ui/Checkbox'

class SelectOne extends React.Component {
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  render () {
    const {title, price, createdAt, onZan, zan, favorite} = this.props
    return (
        <div styleName='box'>
          <h1 styleName='title'>{title}</h1>
          <div styleName='other'>
            <span styleName='price'>{price} <span>/$</span></span>
            <span styleName='createdAt'>{createdAt}</span>
          </div>
          <div styleName='right'>
            
            <div styleName='button'>
              <Checkbox
                checkedIcon={<img src={zanedIcon} alt="" />}
                uncheckedIcon={<img src={zanIcon} alt="" />}
                iconStyle={{maxWidth: '24px', maxHeight: '24px'}}
                // label="Custom icon"
                style={{displey: 'inline-block'}}
                onCheck={onZan}
                checked={zan.status}
              />
              <span styleName='count'>{zan.count}</span>
            </div>
          </div>
        </div>
      )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
