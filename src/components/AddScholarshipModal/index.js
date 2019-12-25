import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputRange from 'react-input-range'
import { FavoriteScholarshipsAction } from '~/store/actions'
import ModalScholarship from '~/components/ModalScholarship'
import { AddScholarshipModal } from './styles'
import 'react-input-range/lib/css/index.css'

export const SortByUniversityName = (a, b) =>
  a.university.name.localeCompare(b.university.name)

export const FilterByCity = ({ city }) => scholarship => {
  return !city || scholarship.campus.city === city
}

export const FilterByCourseName = ({ courseName }) => scholarship => {
  return !courseName || scholarship.course.name === courseName
}

export const FilterByCourseKindPresential = ({
  courseKindPresential,
}) => scholarship => {
  return (
    !courseKindPresential || scholarship.course.kind === courseKindPresential
  )
}

export const FilterByCourseKindDistanceLearning = ({
  courseKindDistanceLearning,
}) => scholarship => {
  return (
    !courseKindDistanceLearning ||
    scholarship.course.kind === courseKindDistanceLearning
  )
}

export const FilterByRange = range => scholarship => {
  return scholarship.price_with_discount < range
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
  const courseNameField = useRef(null)
  const [data, UseData] = useState({})
  const [range, UseRange] = useState(Math.ceil(higherPricedScholarship))
  const [checkedIds, UseCheckedIds] = useState([])

  const rangeFormated = useMemo(() => {
    return `${range.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`
  }, [range])

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

  const HandleCourseKind = useCallback(() => {
    const courseKindPresential =
      courseKindPresentialField.current.checked &&
      courseKindPresentialField.current.value
    const courseKindDistanceLearning =
      courseKindDistanceLearningField.current.checked &&
      courseKindDistanceLearningField.current.value
    const allCourseKindChecked =
      courseKindPresentialField.current.checked &&
      courseKindDistanceLearningField.current.checked

    UseData({
      ...data,
      courseKindPresential: !allCourseKindChecked && courseKindPresential,
      courseKindDistanceLearning:
        !allCourseKindChecked && courseKindDistanceLearning,
    })
  }, [])

  const sortedAndFilteredScholarships = useMemo(() => {
    if (!scholarships.length) return []

    const filtered = scholarships
      .filter(FilterByCity(data))
      .filter(FilterByCourseName(data))
      .filter(FilterByCourseKindPresential(data))
      .filter(FilterByCourseKindDistanceLearning(data))
      .filter(FilterByRange(range))
      .sort(SortByUniversityName)

    return filtered
  }, [scholarships, data, range])

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
                id="Courses"
                name="courseName"
                className="input select"
                ref={courseNameField}
                value={data.courseName}
                onChange={() =>
                  UseData({
                    ...data,
                    courseName: courseNameField.current.value,
                  })
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
                  name="courseKindPresencial"
                  className="checkbox"
                  id="CheckboxPresential"
                  ref={courseKindPresentialField}
                  value="Presencial"
                  onChange={HandleCourseKind}
                />
                <span>Presencial</span>
              </label>
              <label htmlFor="CheckboxDistanceLearning">
                <input
                  type="checkbox"
                  name="courseKindDistanceLearning"
                  className="checkbox"
                  id="CheckboxDistanceLearning"
                  ref={courseKindDistanceLearningField}
                  value="EaD"
                  onChange={HandleCourseKind}
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
            disabled={!checkedIds.length && !favoritedScholarshipsIds.length}
            onClick={HandleSubmit}>
            Adicionar bolsa(s)
          </button>
        </div>
      </div>
    </AddScholarshipModal>
  )
}
