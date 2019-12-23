import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '~/config/axios'
import AddScholarship from '~/components/AddScholarship'
import Scholarship from '~/components/Scholarship'
import { ScholarshipsAction } from '~/store/actions'
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
      {favoriteScholarships.map(scholarship => (
        <div key={scholarship.id}>
          <Scholarship scholarship={scholarship} />
        </div>
      ))}
    </Scholarships>
  )
}
