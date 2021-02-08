import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/actionNames'

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { isLoading: true }
    case LOGIN_SUCCESS:
      localStorage.setItem(
        'userDetails',
        JSON.stringify({ isAdmin: true, ...action.payload })
      )
      return {
        isLoading: false,
        userDetails: { isAdmin: true, ...action.payload },
      }
    case LOGIN_FAILED:
      return { isloading: false, errorMessage: action.payload }

    case LOGOUT: {
      localStorage.removeItem('userDetails')
      return { userDetails: {} }
    }
    default:
      return state
  }
}

export { userLoginReducer }
