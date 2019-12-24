import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FavoriteScholarshipsAction } from '~/store/actions'
import SemesterFilter from '~/components/SemesterFilter'
import Scholarships from '~/components/Scholarships'
import { Main } from './styles'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FavoriteScholarshipsAction.SetFilterSemester(''))
  }, [])

  return (
    <Main id="Main" className="main" aria-label="Bolsas favoritas">
      <div className="container">
        <h1 className="main__title">Bolsas favoritas</h1>
        <p className="main__description">
          Adicione bolsas de cursos e faculdades do seu interesse e receba
          atualizações com as melhores ofertas disponíveis.
        </p>
        <SemesterFilter />
        <Scholarships />
      </div>
    </Main>
  )
}
