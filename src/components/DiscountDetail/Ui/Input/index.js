import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Anonymous from '../../../../images/Anonymous.svg'
import pictures from '../../../../images/pictures.svg'
import ModalAlert from '../../../Ui/ModalAlert'

class Component extends React.Component {
  render () {
    const { avatarUrl, nickname, createdAt } = this.props
    return (
      <div styleName='box'>
        <div styleName='button'>
          <ModalAlert
            key={1}
            title='确认下载？'
            body={
              <div>
                <p style={{lineHeight: '2em'}}>
                  如需发布打折信息，需下载华人生活app。
                  点击确认即可下载。
                </p>
              </div>
            }
            submitLabel='确认'
            cancelLabel='取消'
          >
            <IconButton style={{width: 40, height: 40, padding: 0}}><img src={Anonymous} alt="" /></IconButton>
          </ModalAlert>
          <ModalAlert
            key={2}
            title='确认下载？'
            body={
              <div>
                <p style={{lineHeight: '2em'}}>
                  如需发布打折信息，需下载华人生活app。
                  点击确认即可下载。
                </p>
              </div>
            }
            submitLabel='确认'
            cancelLabel='取消'
          >
            <IconButton style={{width: 40, height: 40, padding: 0}}><img src={pictures} alt="" /></IconButton>
          </ModalAlert>
        </div>
        <div styleName='input'>
        
          <TextField
            ref='input'
            id='input'
            underlineShow={false}
            multiLine={true}
            hintText='评论一下'
            style={{
              border: '1px #ddd solid',
              borderRadius: '5px',
              padding: '0 5px',
              width: '100%'
              // height: 36
            }}
            // textareaStyle={{marginTop: 0}}
          />
          <ModalAlert
            key={2}
            title='确认下载？'
            body={
              <div>
                <p style={{lineHeight: '2em'}}>
                  如需发布打折信息，需下载华人生活app。
                  点击确认即可下载。
                </p>
              </div>
            }
            submitLabel='确认'
            cancelLabel='取消'
          >
            <FlatButton label="发送" style={{
              border: 'none',
              padding: 0,
              height: 38,
              minWidth: '50px',
              flexBasis: '50px',
              marginLeft: '5px'
            }} labelStyle={{
              padding: 0
            }}/>
          </ModalAlert>

        </div>
      </div>
    )
  }
}

Component.defaultProps = {
  desc: ''
}

export default CSSModules(Component, styles, {allowMultiple: true})
