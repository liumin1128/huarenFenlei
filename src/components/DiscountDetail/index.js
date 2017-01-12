import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Headroom from 'react-headroom'
import TopBar from '../Ui/TopBar'
import Loading from '../Ui/LoadingAnimate'
import { hashHistory } from 'react-router'

import IconButton from 'material-ui/IconButton'
import back from '../../images/back.svg'
import release from '../../images/release.svg'

import Divider from 'material-ui/Divider';
import Slider from '../Ui/PicturesSlider'
import Head from './Ui/Head'
import Info from './Ui/Info'
import Desc from './Ui/Desc'
import Comment from './Ui/Comment'
import Input from './Ui/Input'

import ModalAlert from '../Ui/ModalAlert'
import time from '../../images/time.svg'
import tel from '../../images/tel.svg'
import location from '../../images/location.svg'
import address from '../../images/address.svg'

class Discount extends React.Component {
  componentDidMount () {
    // this.props.getDiscountList()
    window.scrollTo(0,0)
  }
  componentWillUnmount () {
  }
  back () {
    // window.history.go(-1)
    hashHistory.push('/discount')
  }
  render () {
    const { discount } = this.props
    return (
      <div styleName='box'>
        <Headroom>
          <TopBar title='详情' left={
            <IconButton onClick={this.back}><img src={back} alt=""/></IconButton>
          } right={[
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
              <IconButton><img src={release} alt="" /></IconButton>
            </ModalAlert>
          ]}/>
        </Headroom>

        <div styleName={discount.waiting ? 'loading' : 'loading hide'}>
            <Loading></Loading>
        </div>

        <Slider />

        <Head price={156} originalPrice={360} discount={6.5} title='牧羊人火锅'/>

        <Info list={[
          {icon: <img src={time} alt="" style={{margin: '7px 12px', width: '24px'}}/>, text: '2016.08.06-2016.10.0'},
          {icon: <img src={tel} alt="" style={{margin: '7px 12px', width: '24px'}}/>, text: '010-30254689'},
          {icon: <img src={location} alt="" style={{margin: '7px 12px', width: '24px'}}/>, text: '洛杉矶'},
          {icon: <img src={address} alt="" style={{margin: '7px 12px', width: '24px'}}/>, text: '洛杉矶洛杉矶洛杉矶洛杉矶'},
        ]}/>

        <Divider style={{background: '#d8d8d8', height: 6, border: '1px #ddd solid'}} />

        <Desc desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean euismod bibendum laoreet. Proin gravida dolor 
sit amet lacus accumsan et viverra justo commodo. Proin
sodales pulvinar tempor. Cum sociis natoque penatibus 
et magnis dis parturient montes, nascetur ridiculus mus. 
Nam fermentum, nulla luctus pharetra vulputate, felis tell
us mollis orci, sed rhoncus sapien nunc eget.'/>

        <Divider style={{background: '#d8d8d8', height: 6, border: '1px #ddd solid'}} />

        <Comment nickname='御坂美琴' createdAt='一分钟前'/>

        <Divider style={{background: '#d8d8d8', height: 6, border: '1px #ddd solid'}} />

        <Input />

      </div>
    )
  }
}

Discount.defaultProps = {
  discount: {
    list: [],
    waiting: false,
    loading: false
  }
}

export default CSSModules(Discount, styles, {allowMultiple: true})
