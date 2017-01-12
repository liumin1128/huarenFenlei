import { connect } from 'react-redux'
import Fenlei from '../index'
import {init, zan, favorite, comment, getMoreComments} from '../actions'

const mapStateToProps = (state) => {
  return {
    details: state.details
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (params) => {
      dispatch(init(params))
    },
    zan: (params) => {
      dispatch(zan(params))
    },
    favorite: (params) => {
      dispatch(favorite(params))
    },
    comment: (params) => {
      dispatch(comment(params))
    },
    getMoreComments: (params) => {
      dispatch(getMoreComments(params))
    }
  }
}

const VisibleFenlei = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fenlei)

export default VisibleFenlei
