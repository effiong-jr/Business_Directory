import { combineReducers } from 'redux'
import { userLoginReducer } from './reducers/userLoginReducer'
import { businessActionReducer } from './reducers/businessActionReducer'

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  businessAction: businessActionReducer,
})

export default rootReducer
