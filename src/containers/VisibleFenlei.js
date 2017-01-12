import { connect } from 'react-redux'
import Fenlei from '../components/Fenlei'
import {getFenleiList, setFenleiObj} from '../actions/fenlei'

const mapStateToProps = (state) => {
  return {
    fenlei: state.fenlei
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFenleiList: (val) => {
      dispatch(getFenleiList(val))
    },
    setFenleiObj: (obj, data) => {
      dispatch(setFenleiObj(obj, data))
    }
  }
}

const VisibleFenlei = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fenlei)

export default VisibleFenlei
