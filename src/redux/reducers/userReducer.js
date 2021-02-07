import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actions/actionNames'

const INITIAL_STATE = {
  userDetails: {},
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true }
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, userDetails: action.payload }
    case LOGIN_FAILED:
      return { ...state, isloading: false, userDetails: {} }
    default:
      return state
  }
}

export { userReducer }
