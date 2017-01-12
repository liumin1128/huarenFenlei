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
import Loading from '../../components/Ui/Loading'
import Waiting from '../../components/Ui/Waiting'
import Filter from '../Ui/FilterOne'
import { getScrollTop, gotoUrl } from '../../actions/common'
import { filtersOptions, classToStr } from '../../actions/config'

class Fenlei extends React.Component {
  constructor (props) {
    super(props)
    this.initData = () => {
      let filters = this.props.fenlei.filters
      let orderBy = this.props.fenlei.orderBy
      let pagination = this.props.fenlei.pagination
      pagination.page = 1
      let params = merge(filters,pagination, {orderBy: orderBy}, {type: this.props.params.fenleiType})
      this.props.fetch(params)
    }
    this.getMore = () => {
      if (!this.props.fenlei.waiting && this.props.fenlei.data.length >= 20) {
        let filters = this.props.fenlei.filters
        let orderBy = this.props.fenlei.orderBy
        let pagination = this.props.fenlei.pagination
        pagination.page+=1
        let params = merge(filters,pagination, {orderBy: orderBy}, {type: this.props.params.fenleiType})
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
      let params = merge(filters,pagination, {orderBy: orderBy}, {type: this.props.params.fenleiType})
      this.props.setFilter(params)
    }
    this.release = () => {
      gotoUrl('release/' + this.props.params.fenleiType)
    }
   }
  componentDidMount () {
    console.log(this.props.params.fenleiType)
    if (this.props.params.fenleiType === this.props.fenlei.current && this.props.fenlei.scrollHeight != 0) {
      setTimeout(() => {
        window.scrollTo(0,this.props.fenlei.scrollHeight)
      }, 0)
    } else {
      this.props.setObj({obj: 'current', val: this.props.params.fenleiType})
      this.initData()
      window.scrollTo(0,0)
    }
    document.body.style.background = '#eee'
  }
  componentWillUnmount () {
    this.props.setObj({obj: 'scrollHeight', val: getScrollTop()})
    document.body.style.background = 'none'
  }
  render () {
    const { fenlei, params } = this.props
    console.log('waiting: ' + fenlei.waiting)
    console.log('loading: ' + fenlei.loading)
    console.log('isEnd: ' + fenlei.isEnd)
    return (
      <div styleName='box'>
        <Headroom>
          <TopBar title={classToStr(params.fenleiType)} left={
              <Back />
            } right={[
              <IconButton key={2} onClick={this.release}><img src={release} alt="" /></IconButton>
          ]}/>
          <div>
            <Filter options={filtersOptions(params.fenleiType)} onChange={this.setFiter}/>
          </div>
        </Headroom>

        <Waiting show={fenlei.waiting}/>

        <List list={fenlei.data} current={params.fenleiType}/>

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
