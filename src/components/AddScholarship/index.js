import React from 'react'
import { AddScholarship } from './styles'

export default () => {
  return (
    <AddScholarship
      id="AddScholarship"
      className="add-scholarship"
      role="button"
      aria-label="Adicionar bolsa">
      <i className="fal fa-plus-circle" />
      <strong>Adicionar bolsa</strong>
      <p>
        Clique para adicionar bolsas de
        <br />
        cursos do seu interesse
      </p>
    </AddScholarship>
  )
}
