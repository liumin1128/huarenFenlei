import { connect } from 'react-redux'
import Release from '../index'
import {updateFenlei} from '../../../actions/server'
import {alert} from '../../../reducers/common/actions'

const mapStateToProps = (state) => {
  return {
      release: updateFenlei,
      edite: state.edite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    alert: (params) => {
      dispatch(alert(params))
    }
  }
}

const VisibleRelease = connect(
  mapStateToProps,
  mapDispatchToProps
)(Release)

export default VisibleRelease
