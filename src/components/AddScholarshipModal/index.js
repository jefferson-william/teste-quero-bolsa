import React, { useState, useMemo } from 'react'
import InputRange from 'react-input-range'
import Field from '~/components/Field'
import { AddScholarshipModal } from './styles'
import 'react-input-range/lib/css/index.css'

export default ({ handleToggleModal }) => {
  const [range, UseRange] = useState(10000)

  const rangeFormated = useMemo(() => {
    return `${range.toLocaleString('pt-BR')},00`
  }, [range])

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
          <div className="add-scholarship-modal__scholarship">
            <div>
              <input type="checkbox" className="checkbox" />
            </div>
            <div>
              <img
                src="https://www.tryimg.com/u/2019/04/16/unip.png"
                alt="Logo da faculdade"
              />
            </div>
            <div className="add-scholarship-modal__info">
              <div>
                <div className="add-scholarship-modal__name">Administração</div>
                <div className="add-scholarship-modal__type">Bacharelado</div>
              </div>
              <div>
                <div className="add-scholarship-modal__discount">
                  Bolsa de{' '}
                  <span className="add-scholarship-modal__discount-percentage">
                    50%
                  </span>
                </div>
                <div className="add-scholarship-modal__price">R$ 294/mês</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="add-scholarship-modal__scholarship">
            <div>
              <input type="checkbox" className="checkbox" />
            </div>
            <div>
              <img
                src="https://www.tryimg.com/u/2019/04/16/unip.png"
                alt="Logo da faculdade"
              />
            </div>
            <div className="add-scholarship-modal__info">
              <div>
                <div className="add-scholarship-modal__name">Administração</div>
                <div className="add-scholarship-modal__type">Bacharelado</div>
              </div>
              <div>
                <div className="add-scholarship-modal__discount">
                  Bolsa de{' '}
                  <span className="add-scholarship-modal__discount-percentage">
                    50%
                  </span>
                </div>
                <div className="add-scholarship-modal__price">R$ 294/mês</div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="add-scholarship-modal__content add-scholarship-modal__buttons">
          <button type="button" className="button">
            Cancelar
          </button>
          <button type="button" className="button button--submit">
            Adicionar bolsa(s)
          </button>
        </div>
      </div>
    </AddScholarshipModal>
  )
}
