import React, { useState, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputRange from 'react-input-range'
import Field from '~/components/Field'
import * as FavoriteScholarshipsAction from '~/store/actions/FavoriteScholarships'
import ModalScholarship from '~/components/ModalScholarship'
import { AddScholarshipModal } from './styles'
import 'react-input-range/lib/css/index.css'

export default ({ handleToggleModal }) => {
  const dispatch = useDispatch()
  const [checkedIds, UseCheckedIds] = useState([])
  const [range, UseRange] = useState(10000)
  const scholarships = useSelector(state => state.Scholarships.data)

  const rangeFormated = useMemo(() => {
    return `${range.toLocaleString('pt-BR')},00`
  }, [range])

  const ToggleModal = useCallback(handleToggleModal, [])

  const HandleSubmit = useCallback(() => {
    dispatch(FavoriteScholarshipsAction.SetIds(checkedIds))

    ToggleModal()
  }, [checkedIds])

  const HandleChecked = useCallback(
    (checked, id) => {
      UseCheckedIds(prevIds => {
        return checked
          ? [...prevIds, id]
          : [...prevIds.filter(value => value !== id)]
      })
    },
    [checkedIds, range]
  )

  return (
    <AddScholarshipModal
      id="AddScholarshipModal"
      className="add-scholarship-modal"
      role="dialog"
      aria-label="Adicionar bolsa">
      <div
        className="add-scholarship-modal__overlay"
        onClick={handleToggleModal}
      />
      <div className="add-scholarship-modal__container">
        <button type="button" className="add-scholarship-modal__close-action">
          <i className="add-scholarship-modal__close-icon fal fa-times" />
        </button>
        <div className="add-scholarship-modal__content">
          <p className="add-scholarship-modal__title">Adicionar bolsa</p>
          <p className="add-scholarship-modal__description">
            Filtre e adicione as bolsas de seu interesse.
          </p>
        </div>
        <div className="add-scholarship-modal__fields add-scholarship-modal__fields">
          <div className="add-scholarship-modal__field">
            <Field type="dropdown" placeholder="Selecione sua cidade" />
          </div>
          <div className="add-scholarship-modal__field">
            <Field
              type="dropdown"
              placeholder="Selecione o curso de sua preferência"
            />
          </div>
        </div>
        <div className="add-scholarship-modal__fields add-scholarship-modal__fields-mark">
          <div className="add-scholarship-modal__field">
            <strong className="add-scholarship-modal__label">
              Como você quer estudar?
            </strong>
            <div className="add-scholarship-modal__checkboxes">
              <label htmlFor="CheckboxPresential">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="CheckboxPresential"
                />
                <span>Presencial</span>
              </label>
              <label htmlFor="CheckboxDistanceLearning">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="CheckboxDistanceLearning"
                />
                <span>A distância</span>
              </label>
            </div>
          </div>
          <div className="add-scholarship-modal__field add-scholarship-modal__range">
            <strong className="add-scholarship-modal__label">
              Até quanto pode pagar?
            </strong>
            <p className="add-scholarship-modal__range-formated">
              R$ {rangeFormated}
            </p>
            <div className="add-scholarship-modal__ranger">
              <InputRange
                minValue={0}
                maxValue={10000}
                formatLabel={() => ''}
                value={range}
                onChange={value => UseRange(value)}
              />
            </div>
          </div>
        </div>
        <div className="add-scholarship-modal__content add-scholarship-modal__filter">
          <div>
            <strong>Resultado:</strong>
          </div>
          <div className="add-scholarship-modal__options">
            <strong>Ordenar por</strong>
            <p>
              Nome da faculdade
              <i className="fal fa-chevron-down" />
            </p>
          </div>
        </div>
        <hr />
        <div className="add-scholarship-modal__scholarships">
          {scholarships.map(scholarship => (
            <>
              <ModalScholarship
                key={scholarship.id}
                data={scholarship}
                handleChecked={HandleChecked}
              />
              <hr />
            </>
          ))}
        </div>
        <div className="add-scholarship-modal__content add-scholarship-modal__buttons">
          <button type="button" className="button" onClick={ToggleModal}>
            Cancelar
          </button>
          <button
            type="button"
            className="button button--submit"
            onClick={HandleSubmit}>
            Adicionar bolsa(s)
          </button>
        </div>
      </div>
    </AddScholarshipModal>
  )
}
