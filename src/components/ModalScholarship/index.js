import React, { useState, useCallback, useRef, useEffect } from 'react'
import { ModalScholarship } from './styles'

export default ({ data, favorited, handleChecked }) => {
  const input = useRef(null)
  const [checked, UseChecked] = useState(false)

  const ToggleChecked = useCallback(() => {
    UseChecked(!checked)

    const id = input.current.value

    handleChecked(!checked, id)
  }, [checked])

  useEffect(() => {
    if (favorited) {
      UseChecked(true)
    }
  }, [])

  return (
    <ModalScholarship
      id="ModalScholarship"
      className="modal-scholarship"
      aria-label={`Bolsa da instituição ${data.university.name}`}
      onClick={ToggleChecked}>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          value={data.id}
          checked={checked}
          ref={input}
          readOnly
        />
      </div>
      <div>
        <img
          src={data.university.logo_url}
          alt={`Logo da instituição ${data.university.name}`}
        />
      </div>
      <div className="modal-scholarship__info">
        <div>
          <div className="modal-scholarship__name">{data.course.name}</div>
          <div className="modal-scholarship__type">{data.course.level}</div>
        </div>
        <div>
          <div className="modal-scholarship__discount">
            Bolsa de{' '}
            <span className="modal-scholarship__discount-percentage">
              {data.discount_percentage.toFixed(0)}%
            </span>
          </div>
          <div className="modal-scholarship__price">
            {data.price_with_discount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
            /mês
          </div>
        </div>
      </div>
    </ModalScholarship>
  )
}
