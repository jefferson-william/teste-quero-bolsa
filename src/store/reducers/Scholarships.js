export const INITIAL_STATE = {
  data: [],
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'SCHOLARSHIPS_SET':
      return {
        ...state,
        data: action.payload.data,
      }
    default:
      return state
  }
}
