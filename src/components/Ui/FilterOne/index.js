import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Select from 'react-select';
import './react-select.css';
class Filter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.onChange = (obj, val) => {
      this.setState({[obj]: val.value})
      this.props.onChange(obj, val.label)
    }
  }
  render () {
    const {options} = this.props
    return (
      <div styleName='box'>
        {
          options.map((i, index) =>
            <Select
              key={index}
              name={'form-field-name' + index}
              value={this.state[i.obj]}
              placeholder={i.text}
              options={i.options}
              onChange={this.onChange.bind(this, i.obj)}
              styleName='select'
              searchable={false}
              clearable={false}
            />
          )
        }
        
      </div>
    )
  }
}

export default CSSModules(Filter, styles, {allowMultiple: true})
