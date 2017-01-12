import { connect } from 'react-redux'
import Fenlei from '../index'
import {fetch, setFilter, setScrollHeight} from '../actions'

const mapStateToProps = (state) => {
  return {
    fenlei: state.house
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
    setScrollHeight: (params) => {
      dispatch(setScrollHeight(params))
    }
  }
}

const VisibleFenlei = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fenlei)

export default VisibleFenlei
