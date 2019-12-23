import shortid from 'shortid'

export const INITIAL_STATE = {
  data: [],
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'SCHOLARSHIPS_SET':
      return {
        ...state,
        data: action.payload.data.map(value => ({
          id: shortid.generate(),
          ...value,
        })),
      }
    default:
      return state
  }
}
