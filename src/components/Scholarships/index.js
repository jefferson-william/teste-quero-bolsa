import React from 'react'
import AddScholarship from '~/components/AddScholarship'
import Scholarship from '~/components/Scholarship'
import { Scholarships } from './styles'

export default () => {
  return (
    <Scholarships
      id="Scholarships"
      className="scholarships"
      aria-label="Bolsas">
      <div>
        <AddScholarship />
      </div>
      <div>
        <Scholarship />
      </div>
    </Scholarships>
  )
}
