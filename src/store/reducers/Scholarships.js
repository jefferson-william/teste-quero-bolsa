export const INITIAL_STATE = {
  data: [],
  cities: [],
  courses: [],
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
        courses: [
          ...new Set(
            action.payload.data.map(value => {
              return value.course.name
            })
          ),
        ],
        cities: [
          ...new Set(
            action.payload.data.map(value => {
              return value.campus.city
            })
          ),
        ],
      }
    default:
      return state
  }
}
