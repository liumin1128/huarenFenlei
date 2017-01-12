import { connect } from 'react-redux'
import DiscountDetail from '../components/DiscountDetail'
// import {getDiscountList} from '../actions/discount'

const mapStateToProps = (state) => {
  return {
    detail: state.discount.tetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getDiscountList: (val) => {
    //   dispatch(getDiscountList(val))
    // }
  }
}

const VisibleDiscountDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscountDetail)

export default VisibleDiscountDetail
