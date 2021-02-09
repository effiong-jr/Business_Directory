import {
  ADD_BUSINESS,
  DELETE_BUSINESS,
  UPDATE_BUSINESS,
} from '../actions/actionNames'

export const businessListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUSINESS:
      localStorage.setItem(
        'businessList',
        JSON.stringify([...state, action.payload])
      )
      return [...state, action.payload]

    case UPDATE_BUSINESS:
      console.log(action.payload)
      const updatedBusinessList = state.map((business) => {
        const updatedList =
          business.id === action.payload.id ? action.payload : business
        return updatedList
      })

      console.log(updatedBusinessList)

      localStorage.setItem(
        'businessList',
        JSON.stringify([...updatedBusinessList])
      )
      return [...updatedBusinessList]

    case DELETE_BUSINESS:
      const listAfterDelete = [...state].filter(
        (business) => business.id !== action.payload
      )
      localStorage.setItem('businessList', JSON.stringify([...listAfterDelete]))
      return [...listAfterDelete]

    default:
      return state
  }
}
