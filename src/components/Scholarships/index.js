import React, { useEffect, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '~/config/axios'
import AddScholarship from '~/components/AddScholarship'
import Scholarship from '~/components/Scholarship'
import { ScholarshipsAction, FavoriteScholarshipsAction } from '~/store/actions'
import { Scholarships } from './styles'

export default () => {
  const dispatch = useDispatch()
  const scholarships = useSelector(state => state.Scholarships.data)
  const favoritedScholarshipsIds = useSelector(
    state => state.FavoriteScholarships.ids
  )

  const [{ data }] = useAxios('/api/redealumni/scholarships')

  const favoriteScholarships = useMemo(() => {
    if (!favoritedScholarshipsIds || !scholarships.length) return []

    return scholarships.filter(
      ({ id }) => favoritedScholarshipsIds.indexOf(id) > -1
    )
  }, [favoritedScholarshipsIds, scholarships])

  const HandleRemove = useCallback(
    id => {
      const ids = favoritedScholarshipsIds.filter(value => value !== id)

      dispatch(FavoriteScholarshipsAction.SetIds(ids))
    },
    [favoritedScholarshipsIds]
  )

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
      {favoriteScholarships
        .sort((a, b) => a.university.name.localeCompare(b.university.name))
        .map(scholarship => (
          <div key={scholarship.id}>
            <Scholarship data={scholarship} handleRemove={HandleRemove} />
          </div>
        ))}
    </Scholarships>
  )
}
