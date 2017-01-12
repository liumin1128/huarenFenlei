import { combineReducers } from 'redux'
import house from '../components/House/reducers'
import details from '../components/HouseDetail/reducers'
import user from '../components/UserCenter/reducers'
import router from '../components/Ui/Back/reducers'
import common from './common'
import edite from '../components/Release/reducers'
import fenlei from '../components/Fenlei/reducers'


const reducers = combineReducers({
  house,
  details,
  user,
  router,
  common,
  fenlei,
  edite
})

export default reducers
