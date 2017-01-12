import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Select from 'react-select';
import './react-select.css';
import { getOrderList } from '../../../actions/config'
class TabBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 1
    }
    this.onChange = (val) => {
      this.setState({value: val.value})
      this.props.onChange(this.props.obj, val.value)
    }
  }
  render () {
    return (
      <div styleName='box'>
        <Select
            name="form-field-name"
            value={this.state.value}
            options={getOrderList()}
            onChange={this.onChange}
            styleName='select'
            searchable={false}
            clearable={false}
        />
      </div>
    )
  }
}

export default CSSModules(TabBar, styles, {allowMultiple: true})
