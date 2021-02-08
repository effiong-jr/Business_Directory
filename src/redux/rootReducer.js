import { combineReducers } from 'redux'
import { userLoginReducer } from './reducers/userLoginReducer'

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
})

export default rootReducer
