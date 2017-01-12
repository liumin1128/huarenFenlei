import { connect } from 'react-redux'
import Fenlei from '../index'
import {addFenlei} from '../../../actions/server'
import {alert} from '../../../reducers/common/actions'

const mapStateToProps = (state) => {
  return {
      release: addFenlei
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    alert: (params) => {
      dispatch(alert(params))
    }
  }
}

const VisibleFenlei = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fenlei)

export default VisibleFenlei
