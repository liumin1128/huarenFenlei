import { connect } from 'react-redux'
import Fenlei from '../index'
import {close} from '../../../../reducers/common/actions'

const mapStateToProps = (state) => {
  return {
      alert: state.common.alert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: (params) => {
      dispatch(close(params))
    }
  }
}

const VisibleFenlei = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fenlei)

export default VisibleFenlei
