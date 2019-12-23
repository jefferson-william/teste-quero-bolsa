export const INITIAL_STATE = {
  ids: [],
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'FAVORITE_SCHOLARSHIPS_SET_IDS':
      return {
        ...state,
        ids: action.payload.ids,
      }
    default:
      return state
  }
}
