export const SetIds = ids => ({
  type: 'FAVORITE_SCHOLARSHIPS_SET_IDS',
  payload: { ids },
})

export const SetFilterSemester = filterSemester => ({
  type: 'FAVORITE_SCHOLARSHIPS_SET_FILTER_SEMESTER',
  payload: { filterSemester },
})

export const SetLowestAndHigherScholarshipPrice = (
  lowestPricedScholarship,
  higherPricedScholarship
) => ({
  type: 'FAVORITE_SCHOLARSHIPS_SET_LOWEST_AND_HIGHER_SCHOLARSHIP_PRICE',
  payload: { lowestPricedScholarship, higherPricedScholarship },
})

export const RemoveById = id => ({
  type: 'FAVORITE_SCHOLARSHIPS_REMOVE_BY_ID',
  payload: { id },
})
