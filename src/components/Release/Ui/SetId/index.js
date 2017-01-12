import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class SelectOne extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      val: null
    }
    this.setSelect = this.setSelect.bind(this);
  }
  componentDidMount () {
    this.setSelect(this.props.list[0])
  }
  componentWillUnmount () {
  }
  setSelect (val) {
    this.setState({val: val})
    this.props.setSelect(this.props.obj, val);
  }
  render () {
    const {left, list} = this.props
    return (
        <div styleName='box'>
          <span styleName={left.length === 2 ? 'left letterSpacing' : 'left'}>{left}</span>
          <div styleName='items'>
            {list && list.map((item, index) =>
              <span
                key={index}
                styleName={this.state.val === item ? 'item active' : 'item'}
                onClick={this.setSelect.bind(this, item)}
               >{item}</span>
            )}
          </div>
        </div>
      )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
