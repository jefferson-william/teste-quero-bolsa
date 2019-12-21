import React from 'react'
import Menu from '~/components/Menu'
import { Navigation } from './styles'

export default () => {
  return (
    <Navigation
      id="Navigation"
      className="navigation"
      role="navigation"
      aria-label="Navegação">
      <div className="navigation__container container">
        <a className="navigation__account" href="#Navigation">
          Minha conta
        </a>
        <Menu />
      </div>
    </Navigation>
  )
}
