import { connect } from 'react-redux'
import Components from '../index'
import { pop } from '../actions'
const mapStateToProps = (state) => {
  return {
    router: state.router
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pop: () => {
      dispatch(pop())
    }
  }
}

const VisibleComponents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components)

export default VisibleComponents
