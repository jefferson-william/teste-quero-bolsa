export const INITIAL_STATE = {
  ids: [],
  filterSemester: '',
  lowestPricedScholarship: 0,
  higherPricedScholarship: 0,
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'FAVORITE_SCHOLARSHIPS_SET_IDS':
      return {
        ...state,
        ids: action.payload.ids.map(value => Number(value)),
      }
    case 'FAVORITE_SCHOLARSHIPS_SET_FILTER_SEMESTER':
      return {
        ...state,
        filterSemester: action.payload.filterSemester,
      }
    case 'FAVORITE_SCHOLARSHIPS_SET_LOWEST_AND_HIGHER_SCHOLARSHIP_PRICE':
      return {
        ...state,
        lowestPricedScholarship: action.payload.lowestPricedScholarship,
        higherPricedScholarship: action.payload.higherPricedScholarship,
      }
    default:
      return state
  }
}
