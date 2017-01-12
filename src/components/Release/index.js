import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
// import Snackbar from 'material-ui/Snackbar';
import Headroom from 'react-headroom'
import Back from '../Ui/Back/containers'
import TopBar from '../Ui/TopBar'
import Hr from '../Ui/Hr'
import {getSubType, getCitys, classToStr} from '../../actions/config'
import {gotoUrl} from '../../actions/common'
// 自定义组件
import InputWithoutLabel from './Ui/InputWithoutLabel';
import SetInput from './Ui/SimpleInput';
import UpPictures from './Ui/UpPictures';
import SetSubType from './Ui/SetType';
import SetIdentity from './Ui/SetId';
import Facilities from './Ui/SelectFacilities';
import SelectCity from './Ui/SelectOne';

class Release extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      type: this.props.params.type,
      open: false,
      alert: false,
      message: '',
      info: {
        id: this.props.edite.id || undefined,
        type: this.props.edite.type || undefined,
        city: this.props.edite.city || undefined,
        tel: this.props.edite.tel || '',
        title: this.props.edite.title || '',
        photo: this.props.edite.photo || [],
        desc: this.props.edite.desc || '',
        subType: this.props.edite.subType || this.props.edite.brand || this.props.edite.jobType || undefined,
        price: this.props.edite.price || this.props.edite.salary || undefined,
        location: this.props.edite.address || this.props.edite.jobLocation || undefined,
        year: this.props.edite.year || undefined,
        mile: this.props.edite.mile || undefined,
        agent: this.props.edite.agentType || undefined,
        color: this.props.edite.color || undefined,
        facilities: this.props.edite.amenities || undefined
      }
    };
    this.handleRequestClose = () => {
      this.setState({
        open: false,
        message: ''
      })
    }
    this.setInfo = (obj, val) => {
      this.setState({ info: {
        ...this.state.info,
        [obj]: val
      }})
    }
    this.release = () => {
      let err = false
      if (!err) {
        if (this.state.info.title === null) {
          this.setState({
            open: true,
            message: '标题不能为空！'
          })
          err = true
        } else if (this.state.info.title.length < 3) {
          this.setState({
            open: true,
            message: '标题不得少于3个字！'
          })
          err = true
        } else if (this.state.info.title.length > 12) {
          this.setState({
            open: true,
            message: '标题不得超过12个字！'
          })
          err = true
        }
      }
      if (!err) {
        if (this.state.info.desc === null) {
          this.setState({
            open: true,
            message: '描述不能为空！'
          })
          err = true
        } else if (this.state.info.desc.length < 15) {
          this.setState({
            open: true,
            message: '描述不得少于15个字！'
          })
          err = true
        } else if (this.state.info.desc.length > 100) {
          this.setState({
            open: true,
            message: '描述不得超过100个字！'
          })
          err = true
        }
      }
      if (!err) {
        if (this.state.info.photo.length === 0) {
          this.setState({
            open: true,
            message: '请至少上传一张图片'
          })
          err = true
        } else if (this.state.info.photo.length > 6) {
          this.setState({
            open: true,
            message: '图片不能超过6张'
          })
          err = true
        }
      }
      if (!err) {
        if (this.state.info.city == null) {
          this.setState({
            open: true,
            message: '请选择城市'
          })
          err = true
        }
      }
      if (!err) {
        if (this.state.info.tel === null) {
          this.setState({
            open: true,
            message: '电话号码不能为空'
          })
          err = true
        } else if (this.state.info.tel.length < 11 || this.state.info.tel.length > 15) {
          this.setState({
            open: true,
            message: '电话号码格式不正确'
          })
          err = true
        }
      }
      if (!err) {
        let commonObj = {
          id: this.state.info.id,
          type: this.state.info.type || this.props.params.type,
          photo: this.state.info.photo,
          city: this.state.info.city,
          tel: this.state.info.tel,
          title: this.state.info.title,
          desc: this.state.info.desc,
          subType: this.state.info.subType
        }
        let finalObj = {}
        switch (this.state.type) {
          case 'business':
            finalObj = {
              ...commonObj,
              price: this.state.info.price
            }
            break;
          case 'car':
            finalObj = {
              ...commonObj,
              price: this.state.info.price,
              year: this.state.info.year,
              mile: this.state.info.mile,
              agent: this.state.info.agent,
              color: this.state.info.color,
              subType: undefined,
              brand: this.state.info.subType
            }
            break;
          case 'house':
            finalObj = {
              ...commonObj,
              price: this.state.info.price,
              address: this.state.info.location,
              agentType: this.state.info.agent,
              amenities: this.state.info.facilities
            }
            break;
          case 'otherItems':
            finalObj = {
              ...commonObj,
              price: this.state.info.price
            }
            break;
          case 'jobs':
            finalObj = {
              ...commonObj,
              jobType: this.state.info.subType,
              subType: undefined,
              salary: this.state.info.price,
              jobLocation: this.state.info.location
            }
            break;
          case 'service':
            finalObj = {
              ...commonObj,
              price: this.state.info.price
            }
            break;
          case 'pet':
            finalObj = {
              ...commonObj
              // price: this.state.info.price
            }
            break;
          default:
            finalObj = commonObj
            break;
        }

        this.props.release(finalObj).then(data => {
          if (data.status === 200) {
            this.props.alert({title: '发布成功，请耐心等待审核通过！'})
            gotoUrl('mypost')
          } else {
            this.props.alert({title: '系统异常！'})
          }
        })
      }
    }
  }
  componentWillMount () {
    window.scroll(0, 0);
  }
  componentWillUnmount () {
  }
  render () {

    var OtherSubType = <SetSubType
      val={this.state.info.subType}
      left='分类'
      list={getSubType(this.state.type)}
      obj='subType'
      setSelect={this.setInfo}
    />
    var OtherPrice = <SetInput
      val={this.state.info.price}
      setInput={this.setInfo}
      unit='$/月'
      left='价位'
      text='不填则表示面议'
      obj='price'
    />
    var OtherIdentity = null
    var OtherFacilities = null
    var OtherLocation = null
    switch (this.state.type) {
      case 'house':
        OtherIdentity = <SetIdentity
          val={this.state.info.agent}
          obj='agent'
          left='身份'
          list={['个人', '经纪人']}
          setSelect={this.setInfo}
        />
        OtherFacilities = <Facilities
          val={this.state.info.facilities}
          obj='facilities'
          setFacilitie={this.setInfo}
        />
        OtherLocation = <SetInput
          val={this.state.info.location}
          setInput={this.setInfo}
          left='详细地址'
          text='请输入详细地址'
          obj='location'
        />
      break;
      case 'jobs':
        OtherPrice = <SetInput
          val={this.state.info.price}
          setInput={this.setInfo}
          unit='$/月'
          left='薪水'
          text='不填则表示面议'
          obj='price'
        />
        OtherLocation = <SetInput
          val={this.state.info.location}
          setInput={this.setInfo}
          left='详细地址'
          text='请输入详细地址'
          obj='location'
        />
      break;
      default:
        break;
    }
    return (
        <div>
            <Headroom>
                <TopBar title={'发布 ' + classToStr(this.state.type)} left={ <Back /> }/>
            </Headroom>
            <div style={{padding: '10px 16px'}}>
              <InputWithoutLabel
                val={this.state.info.title}
                setInput={this.setInfo}
                multiLine={true}
                text='标题'
                obj='title'
                errorText=''
              />
              <InputWithoutLabel
                val={this.state.info.desc}
                setInput={this.setInfo}
                multiLine={true}
                text='请输入描述'
                obj='desc'
                errorText=''
                underlineShow={false}
              />
              <UpPictures obj='photo' url='http://img.huarenmatch.com' setInfo={this.setInfo} list={this.state.info.photo}/>
            </div>
            <Hr />
            <div style={{padding: '10px 0px'}}>
              {OtherIdentity}
              {OtherSubType}
              {OtherFacilities}
            </div>
            <Hr />
            
            <div style={{padding: '10px 16px'}}>
              <SelectCity
                list={getCitys()}
                val={this.state.info.city}
                obj='city'
                left='城市'
                setSelect={this.setInfo}
              />
              {OtherLocation}
              {OtherPrice}
              <SetInput
                val={this.state.info.tel}
                obj='tel'
                setInput={this.setInfo}
                left='联系电话'
                text='请输入联系电话'
              />
              
              <RaisedButton
                label="确认发布"
                primary={true}
                style={{
                  width: '100%',
                  marginTop: '10px',
                  backgroundColor: '#58CC7C'
                }}
                onClick={this.release}
              />
            </div>
            <Snackbar
              open={this.state.open}
              message={this.state.message}
              // action='取消'
              autoHideDuration={2000}
              // onActionTouchTap={this.handleActionTouchTap}
              onRequestClose={this.handleRequestClose}
            />
        </div>
    )
  }
}

Release.defaultProps = {
  edite: {
    photo: [],
    title: '',
    desc: ''
  }
}

export default Release;

