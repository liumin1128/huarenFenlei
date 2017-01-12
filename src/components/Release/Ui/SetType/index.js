import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'

class SelectOne extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      val: this.props.val || null
    }
    this.setSelect = (val) => {
        this.setState({val: val}, function () {
            this.props.setSelect(this.props.obj, val);
        })
    }
  }
  componentWillMount () {
  }
  componentDidMount () {
    if (!this.props.val) {
      this.setSelect(this.props.list[this.props.list.length - 1])
    }
  }
  componentWillUnmount () {
  }
  render () {
    const {list, left} = this.props
    return (
        <div styleName='box'>
          <span styleName={left.length === 2 ? 'left letterSpacing' : 'left'}>{left}</span>
          <div styleName='items'>
            {list && list.map((item, index) =>
              <div
                key={index}
                styleName={this.state.val === item ? 'item active' : 'item'}
                onClick={this.setSelect.bind(this, item)}
                >{item}</div>
            )}
          </div>
        </div>
      )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
