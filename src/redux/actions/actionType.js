import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from './actionNames'

// Login actions
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

export const loginSuccess = ({ email }) => ({
  type: LOGIN_SUCCESS,
  payload: { email },
})

export const loginFailed = (errorMessage) => ({
  type: LOGIN_FAILED,
  payload: errorMessage,
})

export const logout = () => ({
  type: LOGOUT,
})
