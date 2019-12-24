import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { SemesterFilter } from './styles'
import { FavoriteScholarshipsAction } from '~/store/actions'

export default () => {
  const dispatch = useDispatch()

  const HandleFilter = useCallback((event, value) => {
    event.preventDefault()

    dispatch(FavoriteScholarshipsAction.SetFilterSemester(value))
  }, [])

  return (
    <SemesterFilter
      id="SemesterFilter"
      className="semester-filter"
      aria-label="Filtrar por semestre">
      <ul>
        <li>
          <a
            className="semester-filter__action semester-filter__action--active"
            href="#SemesterFilter"
            onClick={event => HandleFilter(event, '')}>
            Todos os semestres
          </a>
        </li>
        <li>
          <a
            className="semester-filter__action"
            href="#SemesterFilter"
            onClick={event => HandleFilter(event, '2019.2')}>
            2º semestre de 2019
          </a>
        </li>
        <li>
          <a
            className="semester-filter__action"
            href="#SemesterFilter"
            onClick={event => HandleFilter(event, '2020.1')}>
            1º semestre de 2020
          </a>
        </li>
      </ul>
    </SemesterFilter>
  )
}
