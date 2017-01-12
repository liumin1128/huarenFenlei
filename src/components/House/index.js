import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import merge from 'lodash/merge'
import Headroom from 'react-headroom'
import IconButton from 'material-ui/IconButton'
import TopBar from '../Ui/TopBar'
import Back from '../Ui/Back/containers'
import release from '../../images/release.svg'
import List from './Ui/List'
// import List from '../Fenlei/Ui/List'
import Loading from '../../components/Ui/Loading'
import Waiting from '../../components/Ui/Waiting'
import Filter from '../Ui/FilterOne'
import { getScrollTop } from '../../actions/common'
import { filtersOptions } from '../../actions/config'

class Fenlei extends React.Component {
  constructor (props) {
    super(props)
    this.initData = () => {
      let filters = this.props.fenlei.filters
      let orderBy = this.props.fenlei.orderBy
      let pagination = this.props.fenlei.pagination
      let params = merge(filters,pagination, {orderBy: orderBy}, {type: 'house'})
      this.props.fetch(params)
    }
    this.getMore = () => {
      if (!this.props.fenlei.waiting) {
        let filters = this.props.fenlei.filters
        let orderBy = this.props.fenlei.orderBy
        let pagination = this.props.fenlei.pagination
        pagination.page+=1
        let params = merge(filters,pagination, {orderBy: orderBy}, {type: 'house'})
        this.props.fetch(params)
      }
    }
    this.setFiter = (obj, val) => {
      let filters = this.props.fenlei.filters
      if (val === '全部') val = undefined
      filters[obj] = val
      let orderBy = this.props.fenlei.orderBy
      let pagination = this.props.fenlei.pagination
      pagination.page = 1
      let params = merge(filters,pagination, {orderBy: orderBy}, {type: 'house'})
      this.props.setFilter(params)
    }
   }
  componentDidMount () {
    if (this.props.fenlei.data.length === 0) {
      this.initData()
      window.scrollTo(0,0)
    } else {
      setTimeout(() => {
        window.scrollTo(0,this.props.fenlei.scrollHeight)
      }, 0)
    }
    document.body.style.background = '#eee'
  }
  componentWillUnmount () {
    this.props.setScrollHeight(getScrollTop())
    document.body.style.background = 'none'
  }
  render () {
    const { fenlei } = this.props
    return (
      <div styleName='box'>
        <Headroom>
          <TopBar title='房屋出租' left={
              <Back />
            } right={[
              <IconButton key={2}><img src={release} alt="" /></IconButton>
          ]}/>
          <div>
            <Filter options={filtersOptions('house')} onChange={this.setFiter}/>
          </div>
        </Headroom>

        <Waiting show={fenlei.waiting}/>

        <List list={fenlei.data}/>

        <Loading loading={this.getMore} isEnd={fenlei.isEnd} show={!fenlei.waiting}/>

      </div>
    )
  }
}

Fenlei.defaultProps = {
  fenlei: {
    data: [],
    waiting: true,
    loading: true,
    isEnd: false
  }
}

export default CSSModules(Fenlei, styles, {allowMultiple: true})
