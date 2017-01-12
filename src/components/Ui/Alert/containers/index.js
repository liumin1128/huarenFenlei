import { connect } from 'react-redux'
import Fenlei from '../index'
// import {addFenlei} from '../../../actions/server'

const mapStateToProps = (state) => {
  return {
      alert: state.common.alert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const VisibleFenlei = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fenlei)

export default VisibleFenlei
