import React from 'react'
import SemesterFilter from '~/components/SemesterFilter'
import { Main } from './styles'

export default () => {
  return (
    <Main id="Main" className="main" aria-label="Bolsas favoritas">
      <div className="container">
        <h1 className="main__title">Bolsas favoritas</h1>
        <p className="main__description">
          Adicione bolsas de cursos e faculdades do seu interesse e receba
          atualizações com as melhores ofertas disponíveis.
        </p>
        <SemesterFilter />
      </div>
    </Main>
  )
}
