import { connect } from 'react-redux'
import Fenlei from '../index'
import {fetch, setFilter, setObj} from '../actions'

const mapStateToProps = (state) => {
  return {
    fenlei: state.fenlei
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (params) => {
      dispatch(fetch(params))
    },
    setFilter: (params) => {
      dispatch(setFilter(params))
    },
    setObj: (params) => {
      dispatch(setObj(params))
    }
  }
}

const VisibleFenlei = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fenlei)

export default VisibleFenlei
