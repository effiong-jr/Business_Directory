import { ADD_BUSINESS, DELETE_BUSINESS } from '../actions/actionNames'

export const businessActionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUSINESS:
      localStorage.setItem(
        'businessList',
        JSON.stringify([...state, action.payload])
      )
      return [...state, action.payload]
    // case DELETE_BUSINESS:
    //   const listAfterDelete = [...state].filter(
    //     (business) => business.id !== action.payload
    //   )
    //   localStorage.setItem('businessList', JSON.stringify(listAfterDelete))
    //   return [...listAfterDelete]

    default:
      return state
  }
}
