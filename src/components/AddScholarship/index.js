import React, { useState, useCallback } from 'react'
import AddScholarshipModal from '~/components/AddScholarshipModal'
import { AddScholarship } from './styles'

export default () => {
  const [openModal, UseOpenModal] = useState(false)

  const ToggleModal = useCallback(() => {
    UseOpenModal(!openModal)
  }, [openModal])

  return (
    <>
      <AddScholarship
        id="AddScholarship"
        className="add-scholarship"
        role="button"
        aria-label="Adicionar bolsa"
        onClick={ToggleModal}>
        <i className="add-scholarship__icon fal fa-plus-circle" />
        <strong className="add-scholarship__title">Adicionar bolsa</strong>
        <p className="add-scholarship__description">
          Clique para adicionar bolsas de
          <br />
          cursos do seu interesse
        </p>
      </AddScholarship>
      {openModal && <AddScholarshipModal handleToggleModal={ToggleModal} />}
    </>
  )
}
