import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionNames'

// Login actions
export const loginRequest = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
})

export const loginSuccess = ({ email, password, isAdmin }) => ({
  type: LOGIN_SUCCESS,
  payload: { email, password, isAdmin },
})

export const loginFailed = (errorMessage) => ({
  type: LOGIN_FAILED,
  payload: errorMessage,
})
