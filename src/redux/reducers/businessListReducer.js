import {
  ADD_BUSINESS,
  DELETE_BUSINESS,
  SEARCH_BUSINESS,
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
      const updatedBusinessList = state.map((business) => {
        const updatedList =
          business.id === action.payload.id ? action.payload : business
        return updatedList
      })

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

    case SEARCH_BUSINESS:
      const businessFromLocalStorage = localStorage.getItem
        ? JSON.parse(localStorage.getItem('businessList'))
        : []

      // Check if Business Name or Business Description contains search value
      const searchedBusiness = businessFromLocalStorage.filter(
        (business) =>
          business.businessName
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          business.description
            .toLowerCase()
            .includes(action.payload.toLowerCase())
      )

      return searchedBusiness

    default:
      return state
  }
}
