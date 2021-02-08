import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const adminInfoFromStorage = localStorage.getItem('userDetails')
  ? JSON.parse(localStorage.getItem('userDetails'))
  : null

const initialState = {
  userLogin: {
    userDetails: adminInfoFromStorage,
  },
}

const middleware = []

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
