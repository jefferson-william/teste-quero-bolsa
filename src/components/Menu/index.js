import React from 'react'
import { Menu } from './styles'

export default () => {
  return (
    <Menu id="Menu" className="menu" role="menu" aria-label="Menu">
      <a className="menu__action" href="#Menu">
        Menu
        <i className="fal fa-chevron-down" />
      </a>
      <input type="checkbox" />
      <ul>
        <li>
          <a role="menuitem" href="#Menu">
            Pré-matriculas
          </a>
        </li>
        <li>
          <a role="menuitem" href="#Menu">
            Bolsas favoritas
          </a>
        </li>
      </ul>
    </Menu>
  )
}
