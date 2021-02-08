import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const adminInfoFromStorage = localStorage.getItem('userDetails')
  ? JSON.parse(localStorage.getItem('userDetails'))
  : {}

const businessListFromStorage = localStorage.getItem('businessList')
  ? JSON.parse(localStorage.getItem('businessList'))
  : []

const initialState = {
  userLogin: {
    userDetails: adminInfoFromStorage,
  },

  businessList: businessListFromStorage,
}

const middleware = []

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
