import React from 'react'
import AddScholarship from '~/components/AddScholarship'
import { Scholarships } from './styles'

export default () => {
  return (
    <Scholarships
      id="Scholarships"
      className="Scholarships"
      aria-label="Bolsas">
      <AddScholarship />
    </Scholarships>
  )
}
