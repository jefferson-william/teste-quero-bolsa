import React from 'react'
import { Scholarship } from './styles'

export default () => {
  return (
    <Scholarship id="Scholarship" className="scholarship" aria-label="Bolsa">
      <img
        src="https://www.tryimg.com/u/2019/04/16/unip.png"
        alt="Logo da faculdade"
      />
      <strong>Anhanguera</strong>
      <a className="scholarship__title" href="#Scholarship">
        Arquitetura e Urbanismo
      </a>
      <div className="scholarship__punctuation">
        <b className="scholarship__score">3.8</b>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
          <i className="fal fa-star" />
        </div>
      </div>
      <hr />
      <strong className="scholarship__period">Presencial · Noite</strong>
      <p className="scholarship__when">Início das aulas em: 05/03/2020</p>
      <hr />
      <b className="scholarship__text">Mensalidade com o Quero Bolsa:</b>
      <p className="scholarship__original-price">R$ 1.487,31</p>
      <p>
        <span className="scholarship__discount-price">R$ 453,63</span>
        <span>/mês</span>
      </p>
      <div className="scholarship__buttons">
        <button className="scholarship__delete" type="button">
          Excluir
        </button>
        <button className="scholarship__offer" type="button">
          Ver oferta
        </button>
      </div>
    </Scholarship>
  )
}
