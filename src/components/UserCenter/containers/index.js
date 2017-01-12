import { connect } from 'react-redux'
import Components from '../index'
import { logout } from '../actions'
import { alert } from '../../../reducers/common/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    },
    alert: (params) => {
      dispatch(alert(params))
    }
  }
}

const VisibleComponents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components)

export default VisibleComponents
