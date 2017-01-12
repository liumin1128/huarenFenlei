import { connect } from 'react-redux'
import Components from '../index'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // logout: () => {
    //   dispatch(logout())
    // }
  }
}

const VisibleComponents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components)

export default VisibleComponents
