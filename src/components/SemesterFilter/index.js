import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SemesterFilter } from './styles'
import { FavoriteScholarshipsAction } from '~/store/actions'

export default () => {
  const dispatch = useDispatch()
  const activeClass = 'semester-filter__action--active'
  const [filterSemester] = useSelector(state => [
    state.FavoriteScholarships.filterSemester,
  ])

  const HandleFilter = useCallback((event, value) => {
    event.preventDefault()

    dispatch(FavoriteScholarshipsAction.SetFilterSemester(value))
  }, [])

  const classFilterActive = useMemo(() => {
    return {
      noFilter: !filterSemester,
      secondSemester2019: filterSemester === '2019.2',
      firstSemester2020: filterSemester === '2020.1',
    }
  }, [filterSemester])

  return (
    <SemesterFilter
      id="SemesterFilter"
      className="semester-filter"
      aria-label="Filtrar por semestre">
      <ul>
        <li>
          <a
            className={`semester-filter__action ${classFilterActive.noFilter &&
              activeClass}`}
            href="#SemesterFilter"
            onClick={event => HandleFilter(event, '')}>
            Todos os semestres
          </a>
        </li>
        <li>
          <a
            className={`semester-filter__action ${classFilterActive.secondSemester2019 &&
              activeClass}`}
            href="#SemesterFilter"
            onClick={event => HandleFilter(event, '2019.2')}>
            2º semestre de 2019
          </a>
        </li>
        <li>
          <a
            className={`semester-filter__action ${classFilterActive.firstSemester2020 &&
              activeClass}`}
            href="#SemesterFilter"
            onClick={event => HandleFilter(event, '2020.1')}>
            1º semestre de 2020
          </a>
        </li>
      </ul>
    </SemesterFilter>
  )
}
