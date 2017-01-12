import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
class Component extends React.Component {
  constructor (props) {
    super(props)
    this.handleClose = () => {
      this.props.close()
    }
    this.handleSubmit = () => {
      this.handleClose()
      if (this.props.alert.callback) {
        this.props.alert.callback()
      }
    }
  }
  render () {
    const {alert} = this.props
    const actions = <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <div>{alert.callback ? <FlatButton
          label={alert.cancelLabel || '取消'}
          primary={true}
          onTouchTap={this.handleClose}
      /> : null}</div>
      <FlatButton
        label={alert.submitLabel || '确认'}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />
    </div>
    
    return (
      <div styleName='box'>
        <Dialog
          title={alert.title || '华人生活网'}
          titleStyle={{fontSize: '16px', color: '#515151', fontWidth: 'bold'}}
          actions={actions}
          modal={false}
          open={alert.open}
          onRequestClose={this.handleClose}
          contentStyle={{padding: 10, width: '100%', maxWidth: 'none'}}
        >
          {alert.message}
        </Dialog>
      </div>
    )
  }
}

Component.defaultProps = {
  alert: {
    open: false
  }
}

export default CSSModules(Component, styles, {allowMultiple: true})
