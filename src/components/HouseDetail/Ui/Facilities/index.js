import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import IconButton from 'material-ui/IconButton';

class SelectOne extends React.Component {
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  render () {
    const {facilities} = this.props
    return (
        <div styleName='box'>
          {facilities && facilities.map((item, index) =>
            <div key={index} styleName='facilitie'>
              <IconButton touch={true}>
                <img src={ item.val ? '/images/' + item.type + '_s@3x.png' : '/images/' + item.type + '@3x.png'} />
              </IconButton>
              <p>{item.name}</p>
            </div>
          )}
          <div key={110} styleName='facilitie'></div>
          <div key={111} styleName='facilitie'></div>
        </div>
      )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
