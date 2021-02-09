import {
  ADD_BUSINESS,
  DELETE_BUSINESS,
  SEARCH_BUSINESS,
  UPDATE_BUSINESS,
  VIEW_ALL_BUSINESS,
} from './actionNames'

// CRUD Business actions
export const viewAllBusiness = () => ({
  type: VIEW_ALL_BUSINESS,
})

export const addBusiness = (data) => ({
  type: ADD_BUSINESS,
  payload: data,
})

export const deleteBusiness = (id) => ({
  type: DELETE_BUSINESS,
  payload: id,
})

export const updateBusiness = (data) => ({
  type: UPDATE_BUSINESS,
  payload: data,
})

export const searchBusiness = (value) => ({
  type: SEARCH_BUSINESS,
  payload: value,
})
