export const INITIAL_STATE = {
  ids: [],
  filterSemester: '',
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
    default:
      return state
  }
}
