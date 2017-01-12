import { connect } from 'react-redux'
import MyPost from '../index'
import { set } from '../../Release/actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEdite: (params) => {
      dispatch(set(params))
    }
  }
}

const VisibleMyPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPost)

export default VisibleMyPost
