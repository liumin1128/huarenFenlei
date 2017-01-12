import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class SelectOne extends React.Component {
  constructor (props) {
    super(props);
    this.setSelect = this.setSelect.bind(this);
  }
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  setSelect () {
    this.props.setSelect(this.props.obj, this.refs.select.value);
  }
  render () {
    const {list, val, left} = this.props
    return (
        <div styleName='box'>
          {/* <NavigationChevronRight style={{position: 'absolute', right: '0px', top: '10px', color: '#515151'}} /> */}
          <span styleName={left.length === 2 ? 'left letterSpacing' : 'left'}>{left}</span>
          <select
              ref='select'
              defaultValue={val || null}
              styleName='select'
              onChange={this.setSelect}
              >
              <option value={null}>请选择城市</option>
              {list && list.map((item, index) =>
                  <option key={index} value={item}>{item}</option>
              )}
          </select>
        </div>
      )
  }
}

export default CSSModules(SelectOne, styles, {allowMultiple: true})
