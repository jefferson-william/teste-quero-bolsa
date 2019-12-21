import React from 'react'
import { Breadcrumb } from './styles'

export default () => {
  return (
    <Breadcrumb id="Breadcrumb" className="breadcrumb" aria-label="Breadcrumb">
      <ul className="container">
        <li>
          <a role="menuitem" href="#Breadcrumb">
            Home
          </a>
        </li>
        <li>
          <a role="menuitem" href="#Breadcrumb">
            <i className="fal fa-chevron-left" />
            Minha conta
          </a>
        </li>
        <li>Bolsas favoritas</li>
      </ul>
    </Breadcrumb>
  )
}
