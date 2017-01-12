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
    const {text, multiLine, val, errorText, underlineShow} = this.props
    return (
        <div styleName='box'>
          <TextField
            id='input'
            ref='input'
            defaultValue={val}
            style={{width: '100%', fontSize: '14px'}}
            multiLine={multiLine || false}
            hintText={text}
            errorText={errorText || ''}
            underlineShow={underlineShow}
            onChange={this.setInput}
          />
        </div>
      )
  }
}

export default CSSModules(ReleaseInput, styles, {allowMultiple: true})
