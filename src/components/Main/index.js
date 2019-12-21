import React from 'react'
import SemesterFilter from '~/components/SemesterFilter'
import { Main } from './styles'

export default () => {
  return (
    <Main id="Main" className="main" aria-label="Bolsas favoritas">
      <div className="container">
        <h1>Bolsas favoritas</h1>
        <p>
          Adicione bolsas de cursos e faculdades do seu interesse e receba
          atualizações com as melhores ofertas disponíveis.
        </p>
        <SemesterFilter />
      </div>
    </Main>
  )
}
