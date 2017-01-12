import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleOpen = () => {
      this.setState({open: true});
    }

    this.handleClose = () => {
      this.setState({open: false});
    }
    this.handleSubmit = () => {
      window.location = 'http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.huarenlife'
      this.handleClose()
    }
  }
  render () {
    const {title, body, submitLabel, cancelLabel, children} = this.props
    const actions = [
      <FlatButton
        label={cancelLabel || '取消'}
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label={submitLabel || '确认'}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />
    ]
    return (
      <div styleName='box'>
        <span onTouchTap={this.handleOpen}>{children}</span>
        <Dialog
          title={title || '华人生活网'}
          titleStyle={{fontSize: '16px', color: '#515151', fontWidth: 'bold'}}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{padding: 10, width: '100%', maxWidth: 'none'}}
        >
          {body}
        </Dialog>
      </div>
    )
  }
}

Component.defaultProps = {
  desc: ''
}

export default CSSModules(Component, styles, {allowMultiple: true})
