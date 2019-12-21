import React from 'react'
import { SemesterFilter } from './styles'

export default () => {
  return (
    <SemesterFilter
      id="SemesterFilter"
      className="semester-filter"
      aria-label="Filtrar por semestre">
      <ul>
        <li>
          <a
            className="semester-filter__action semester-filter__action--active"
            href="#SemesterFilter">
            Todos os semestres
          </a>
        </li>
        <li>
          <a className="semester-filter__action" href="#SemesterFilter">
            2º semestre de 2019
          </a>
        </li>
        <li>
          <a className="semester-filter__action" href="#SemesterFilter">
            1º semestre de 2020
          </a>
        </li>
      </ul>
    </SemesterFilter>
  )
}
