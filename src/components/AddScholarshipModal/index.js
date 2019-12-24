import React, { useState, useRef, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputRange from 'react-input-range'
import { FavoriteScholarshipsAction } from '~/store/actions'
import ModalScholarship from '~/components/ModalScholarship'
import { AddScholarshipModal } from './styles'
import 'react-input-range/lib/css/index.css'

export const SortByUniversityName = (a, b) =>
  a.university.name.localeCompare(b.university.name)

export const FilterByCity = city => scholarship => {
  return !city || scholarship.campus.city === city
}

export default ({ handleToggleModal }) => {
  const dispatch = useDispatch()
  const [
    scholarships,
    cities,
    courses,
    favoritedScholarshipsIds,
    lowestPricedScholarship,
    higherPricedScholarship,
  ] = useSelector(state => [
    state.Scholarships.data,
    state.Scholarships.cities,
    state.Scholarships.courses,
    state.FavoriteScholarships.ids,
    state.FavoriteScholarships.lowestPricedScholarship,
    state.FavoriteScholarships.higherPricedScholarship,
  ])

  const courseKindPresentialField = useRef(null)
  const courseKindDistanceLearningField = useRef(null)
  const cityField = useRef(null)
  const courseField = useRef(null)
  const [data, UseData] = useState({
    range: Math.ceil(higherPricedScholarship),
  })
  const [checkedIds, UseCheckedIds] = useState([])

  const rangeFormated = useMemo(() => {
    return `${data.range.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`
  }, [data.range])

  const ToggleModal = useCallback(handleToggleModal, [])

  const HandleSubmit = useCallback(() => {
    dispatch(FavoriteScholarshipsAction.SetIds(checkedIds))

    ToggleModal()
  }, [checkedIds])

  const HandleChecked = useCallback((checked, id) => {
    UseCheckedIds(prevIds => {
      return checked
        ? [...prevIds, id]
        : [...prevIds.filter(value => value !== id)]
    })
  }, [])

  const sortedAndFilteredScholarships = useMemo(() => {
    if (!scholarships.length) return []

    return scholarships
      .filter(FilterByCity(data.city))
      .sort(SortByUniversityName)
  }, [scholarships, data])

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
            <label
              htmlFor="Cities"
              className="add-scholarship-modal__label select">
              Selecione sua cidade
              <select
                name="cities"
                id="Cities"
                className="input select"
                ref={cityField}
                value={data.city}
                onChange={() =>
                  UseData({ ...data, city: cityField.current.value })
                }>
                <option />
                {cities.map(value => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="add-scholarship-modal__field">
            <label
              htmlFor="Courses"
              className="add-scholarship-modal__label select">
              Selecione o curso de sua preferência
              <select
                name="courses"
                id="Courses"
                className="input select"
                ref={courseField}
                value={data.course}
                onChange={() =>
                  UseData({ ...data, course: courseField.current.value })
                }>
                <option />
                {courses.map(value => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
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
                  name="courseKind"
                  className="checkbox"
                  id="CheckboxPresential"
                  ref={courseKindPresentialField}
                  value={data.courseKindPresential}
                  onChange={() =>
                    UseData({
                      ...data,
                      courseKindPresential:
                        courseKindPresentialField.current.value,
                    })
                  }
                />
                <span>Presencial</span>
              </label>
              <label htmlFor="CheckboxDistanceLearning">
                <input
                  type="checkbox"
                  name="courseKind"
                  className="checkbox"
                  id="CheckboxDistanceLearning"
                  ref={courseKindDistanceLearningField}
                  value={data.courseKindDistanceLearning}
                  onChange={() =>
                    UseData({
                      ...data,
                      courseKindDistanceLearning:
                        courseKindDistanceLearningField.current.value,
                    })
                  }
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
              {rangeFormated}
            </p>
            <div className="add-scholarship-modal__ranger">
              <InputRange
                minValue={lowestPricedScholarship}
                maxValue={Math.ceil(higherPricedScholarship)}
                formatLabel={() => ''}
                value={data.range}
                onChange={value => UseData({ ...data, range: value })}
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
          {sortedAndFilteredScholarships.map(scholarship => (
            <div key={scholarship.id}>
              <ModalScholarship
                key={scholarship.id}
                data={scholarship}
                handleChecked={HandleChecked}
                favorited={
                  favoritedScholarshipsIds.indexOf(scholarship.id) > -1
                }
              />
              <hr />
            </div>
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
