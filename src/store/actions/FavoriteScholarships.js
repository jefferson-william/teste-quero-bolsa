export const SetIds = ids => ({
  type: 'FAVORITE_SCHOLARSHIPS_SET_IDS',
  payload: { ids },
})

export const SetFilterSemester = filterSemester => ({
  type: 'FAVORITE_SCHOLARSHIPS_SET_FILTER_SEMESTER',
  payload: { filterSemester },
})
