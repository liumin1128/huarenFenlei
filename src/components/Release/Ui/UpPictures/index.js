import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import camera from '../../../../images/camera.svg'
import { getQiniuImg } from '../../../../actions/common'

import AV from 'leancloud-storage'

var Qiniu = require('react-qiniu')

class UpOneImg extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      files: [],
      image: this.props.image || '',
      imagesList: this.props.list || [],
      imageShow: '',
      open: false,
            // http://huarenlife.leanapp.cn/qiniutoken
      token: ''
      // uploadKey: 'YOUR_CUSTOM_UPLOAD_KEY', // Optional
      // prefix: 'YOUR_QINIU_KEY_PREFIX' // Optional
    }
    this.onUpload = this.onUpload.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.setView = this.setView.bind(this)
    this.closeView = this.closeView.bind(this)
    this.delImg = this.delImg.bind(this)
  }
  componentWillMount () {
    var that = this
    AV.Cloud.run('info_list_getQiniuToken').then(function(data) {
      // 调用成功，得到成功的应答 data
      that.setState({token: data.token})
    }, function (error) {
      // 处理调用失败
      console.log(error)
    });
  }
  handleOpen = () => {
    this.setState({open: true});
  }
  handleClose = () => {
    this.setState({open: false});
  }
  onUpload (files) {
    // set onprogress function before uploading
    files.map(function (f) {
      f.onprogress = function (e) {
      }
    })
  }
  onDrop (files) {
    for (let i = 0; i < files.length; i++) {
      var that = this;
      files[i].uploadPromise.then(function (res) {
        // that.props.setInfo(that.props.obj, that.props.targetUrl + '/' + JSON.parse(res.text).key)
        var imagesList = that.state.imagesList
        imagesList.push(that.props.url + '/' + JSON.parse(res.text).key);
        that.props.setInfo(that.props.obj, imagesList)
      })
    }
  }
  setView (val) {
    this.setState({
      imageShow: val,
      open: true
    })
  }
  closeView () {
    this.setState({open: false})
  }
  delImg () {
    for (let i = 0; i < this.state.imagesList.length; i++) {
      if (this.state.imagesList[i] === this.state.imageShow) {
        delete this.state.imagesList[i]
        var list = this.props.list;
        delete list[i]
        this.props.setInfo(this.props.obj, list)
        this.setState({open: false})
        return true
      }
    }
  }
  render () {
    return (
        <div styleName='box' style={{width: this.props.size + 'px', height: this.props.size + 'px'}}>
          <div styleName='imageViewList'>
            {this.state.imagesList.length === 0 ? null : this.state.imagesList.map((img, index) =>
              <img onClick={this.setView.bind(this, img)} styleName='img' key={index} src={getQiniuImg(img)} />
            )}
            <Qiniu styleName='qiniu' onDrop={this.onDrop} size={150} token={this.state.token} uploadKey={this.state.uploadKey} onUpload={this.onUpload}>
              <img src={camera} styleName='camera' alt=""/>
            </Qiniu>
          </div>
          <div styleName={this.state.open ? 'modal open' : 'modal'}>
            <img onClick={this.closeView} src={this.state.imageShow} styleName='imgView' alt=""/>
            <div styleName='foot'>
              <span onClick={this.closeView}>取消</span>
              <span onClick={this.delImg}>删除</span>
            </div>
          </div>
        </div>
    )
  }
}
UpOneImg.defaultProps = {
}
export default CSSModules(UpOneImg, styles, {allowMultiple: true})
