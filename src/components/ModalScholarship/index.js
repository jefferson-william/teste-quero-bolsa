import React from 'react'
import { ModalScholarship } from './styles'

export default () => {
  return (
    <ModalScholarship
      id="ModalScholarship"
      className="modal-scholarship"
      aria-label="Bolsa">
      <div>
        <input type="checkbox" className="checkbox" />
      </div>
      <div>
        <img
          src="https://www.tryimg.com/u/2019/04/16/unip.png"
          alt="Logo da faculdade"
        />
      </div>
      <div className="modal-scholarship__info">
        <div>
          <div className="modal-scholarship__name">Administração</div>
          <div className="modal-scholarship__type">Bacharelado</div>
        </div>
        <div>
          <div className="modal-scholarship__discount">
            Bolsa de{' '}
            <span className="modal-scholarship__discount-percentage">50%</span>
          </div>
          <div className="modal-scholarship__price">R$ 294/mês</div>
        </div>
      </div>
    </ModalScholarship>
  )
}
