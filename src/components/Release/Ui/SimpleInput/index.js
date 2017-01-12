import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import TextField from 'material-ui/TextField';

class ReleaseInput extends React.Component {
  constructor (props) {
    super(props);
    this.setInput = this.setInput.bind(this);
  }
  setInput () {
    if (this.props.multiLine) {
      this.props.setInput(this.props.obj, this.refs.input.input.refs.input.value);
    } else {
      this.props.setInput(this.props.obj, this.refs.input.input.value);
    }
  }
  render () {
    const {text, left, multiLine, unit, val} = this.props
    return (
        <div styleName='box'>
          <span styleName={left.length === 2 ? 'left letterSpacing' : 'left'}>{left}</span>
          <span styleName='unit'>{unit}</span>
          <TextField
            id='input'
            ref='input'
            defaultValue={val}
            style={{width: '100%', fontSize: '14px'}}
            multiLine={multiLine || false}
            hintText={text}
            onChange={this.setInput}
          />
        </div>
      )
  }
}

export default CSSModules(ReleaseInput, styles, {allowMultiple: true})
