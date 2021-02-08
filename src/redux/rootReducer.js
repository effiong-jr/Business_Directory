import { combineReducers } from 'redux'
import { userLoginReducer } from './reducers/userLoginReducer'
import { businessListReducer } from './reducers/businessListReducer'

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  businessList: businessListReducer,
})

export default rootReducer
