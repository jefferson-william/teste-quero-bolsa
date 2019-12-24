export const INITIAL_STATE = {
  data: [],
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  let count = 0

  switch (action.type) {
    case 'SCHOLARSHIPS_SET':
      return {
        ...state,
        data: action.payload.data.map(value => {
          count += 1

          return {
            id: count,
            ...value,
          }
        }),
      }
    default:
      return state
  }
}
