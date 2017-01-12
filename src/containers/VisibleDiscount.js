import { connect } from 'react-redux'
import Discount from '../components/Discount'
import {getDiscountList, setDiscountObj} from '../actions/discount'

const mapStateToProps = (state) => {
  return {
    discount: state.discount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDiscountList: (val) => {
      dispatch(getDiscountList(val))
    },
    setDiscountObj: (obj, data) => {
      dispatch(setDiscountObj(obj, data))
    }
  }
}

const VisibleDiscount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Discount)

export default VisibleDiscount
