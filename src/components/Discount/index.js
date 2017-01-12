import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import merge from 'lodash/merge'
import Headroom from 'react-headroom'
import IconButton from 'material-ui/IconButton'

import location from '../../images/location.svg'
import release from '../../images/release.svg'
import back from '../../images/back.svg'

import TopBar from '../Ui/TopBar'
import TabBar from '../Ui/TabBar'
import Order from '../Ui/Order'
import ModalAlert from '../Ui/ModalAlert'
import List from './Ui/List'
import Loading from './Ui/Loading'
import Waiting from './Ui/Waiting'

import { getScrollTop } from '../../actions/common'

class Discount extends React.Component {
  constructor (props) {
    super(props)
    this.initData = () => {
      let filters = this.props.discount.filters
      let orderBy = this.props.discount.orderBy
      let pagination = this.props.discount.pagination
      let params = merge(filters,pagination, {orderBy: orderBy})
      this.props.getDiscountList(params)
    }
    this.getMore = () => {
      if (!this.props.discount.waiting) {
        let filters = this.props.discount.filters
        let orderBy = this.props.discount.orderBy
        let pagination = this.props.discount.pagination
        pagination.page+=1
        let params = merge(filters,pagination, {orderBy: orderBy})
        this.props.getDiscountList(params)
      }
    }
    this.setFiter = (obj, val) => {
      // console.log(obj, val)
      this.props.setDiscountObj(obj, val)
    }
  }
  componentDidMount () {
    console.log(this.props.discount)
    if (this.props.discount.data.length === 0) {
      this.initData()
      window.scrollTo(0,0)
    } else {
      setTimeout(() => {
        window.scrollTo(0,this.props.discount.scrollHeight)
      }, 0)
    }
    document.body.style.background = '#eee'
  }
  componentWillUnmount () {
    this.props.setDiscountObj('scrollHeight', getScrollTop())
    document.body.style.background = 'none'
  }
  render () {
    const { discount } = this.props
    return (
      <div styleName='box'>
        <Headroom>
          <TopBar title='打折列表' left={
              <IconButton><img src={back} alt="" /></IconButton>
            } right={[
              <IconButton key={1}><img src={location} alt="" /></IconButton>,
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
          <TabBar onChange={this.setFiter} obj='type' />
          <Order onChange={this.setFiter} obj='orderBy'/>
        </Headroom>

        <Waiting show={discount.waiting}/>

        <List list={discount.data}/>

        <Loading loading={this.getMore} show={!discount.waiting}/>

      </div>
    )
  }
}

Discount.defaultProps = {
  discount: {
    list: [],
    waiting: true,
    loading: false
  }
}

export default CSSModules(Discount, styles, {allowMultiple: true})
