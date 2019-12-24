import React, { useEffect, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '~/config/axios'
import AddScholarship from '~/components/AddScholarship'
import Scholarship from '~/components/Scholarship'
import { ScholarshipsAction, FavoriteScholarshipsAction } from '~/store/actions'
import { Scholarships } from './styles'

export default () => {
  const dispatch = useDispatch()
  const [
    scholarships,
    favoritedScholarshipsIds,
    filterSemester,
  ] = useSelector(state => [
    state.Scholarships.data,
    state.FavoriteScholarships.ids,
    state.FavoriteScholarships.filterSemester,
  ])

  const [{ data }] = useAxios('/api/redealumni/scholarships')

  const HandleRemove = useCallback(
    id => {
      const ids = favoritedScholarshipsIds.filter(value => value !== id)

      dispatch(FavoriteScholarshipsAction.SetIds(ids))
    },
    [favoritedScholarshipsIds]
  )

  const GetFavoritedScholarshipByIds = useCallback(
    ({ id }) => favoritedScholarshipsIds.indexOf(id) > -1,
    [favoritedScholarshipsIds]
  )

  const GetFavoritedScholarshipBySemester = useCallback(
    scholarship => {
      const semesterEqual = scholarship.enrollment_semester === filterSemester

      return (filterSemester && semesterEqual) || !filterSemester
    },
    [filterSemester]
  )

  const GetSorted = useCallback(
    (a, b) => a.university.name.localeCompare(b.university.name),
    []
  )

  const GetMapped = useCallback(
    scholarship => (
      <div key={scholarship.id}>
        <Scholarship data={scholarship} handleRemove={HandleRemove} />
      </div>
    ),
    []
  )

  const favoriteScholarships = useMemo(() => {
    if (!favoritedScholarshipsIds || !scholarships.length) return []

    return scholarships
      .filter(GetFavoritedScholarshipByIds)
      .filter(GetFavoritedScholarshipBySemester)
  }, [favoritedScholarshipsIds, scholarships, filterSemester])

  useEffect(() => {
    if (!data) return

    dispatch(ScholarshipsAction.Set(data))
  }, [data])

  return (
    <Scholarships
      id="Scholarships"
      className="scholarships"
      aria-label="Bolsas">
      <div>
        <AddScholarship />
      </div>
      {favoriteScholarships.sort(GetSorted).map(GetMapped)}
    </Scholarships>
  )
}
