import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import sent from '../../images/sent.svg';
class Commment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      info: null,
      createdAt: null,
      replyTo: null,
      replyToId: undefined
    }
    this.onSent = this.onSent.bind(this);
  }
  componentWillMount () {
  }
  componentDidMount () {
    this.refs.replyInput.input.refs.input.addEventListener('blur', this.props.blur);
  }
  componentWillUnmount () {
    this.refs.replyInput.input.refs.input.removeEventListener('blur', this.props.blur);
  }
  onSent () {
    // console.log(this.refs.replyInput.input.refs.input.value)
    this.props.onSent(this.refs.replyInput.input.refs.input.value)
    this.refs.replyInput.input.refs.input.value = ''
  }
  render () {
    return (
        <div styleName='box'>
          <div styleName='reply'>
            <TextField
              ref='replyInput'
              inputStyle={{
                borderRadius: '24px',
                background: '#FFFFFF',
                boxShadow: '0px 0px 3px #D5D5D5 inset',
                fontFamily: 'FZLTXHK--GBK1-0',
                fontSize: '16px',
                color: '#515151',
                letterSpacing: '0px',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
              hintStyle={{
                zIndex: '2',
                paddingLeft: '15px'
              }}
              multiLine={true}
              hintText={this.state.replyTo || '评论一下'}
              id="text-field-default"
              rowsMax={3}
              underlineShow={false}
              fullWidth={true}/>
            <IconButton onClick={this.onSent}>
              <img src={sent} alt="" styleName='sentButton'/>
            </IconButton>
          </div>
        </div>
      )
  }
}

export default CSSModules(Commment, styles, {allowMultiple: true})
