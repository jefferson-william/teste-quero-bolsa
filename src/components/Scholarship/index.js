import React from 'react'
import Stars from '~/components/Stars'
import { Scholarship } from './styles'

export default ({ data }) => {
  return (
    <Scholarship
      id="Scholarship"
      className="scholarship"
      role="form"
      aria-label="Bolsa">
      <img
        src={data.university.logo_url}
        alt={`Logo da faculdade ${data.university.name}`}
      />
      <strong>{data.university.name}</strong>
      <a className="scholarship__title" href="#Scholarship">
        {data.course.name}
      </a>
      <div className="scholarship__punctuation">
        <b className="scholarship__score">{data.university.score.toFixed(1)}</b>
        <Stars data={data.university.score} />
      </div>
      <hr />
      <strong className="scholarship__period">
        {data.course.kind} · {data.course.shift}
      </strong>
      <p className="scholarship__when">
        Início das aulas em: {data.start_date}
      </p>
      <hr />
      <b className="scholarship__text">Mensalidade com o Quero Bolsa:</b>
      <p className="scholarship__original-price">
        {data.full_price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
      <p>
        <span className="scholarship__discount-price">
          {data.price_with_discount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <span>/mês</span>
      </p>
      <div className="scholarship__buttons">
        <button className="button" type="button">
          Excluir
        </button>
        <button
          className="button button--submit"
          type="button"
          disabled={!data.enabled}>
          {data.enabled ? 'Ver oferta' : 'Indisponível'}
        </button>
      </div>
    </Scholarship>
  )
}
