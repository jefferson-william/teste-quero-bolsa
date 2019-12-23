import React from 'react'
import shortid from 'shortid'
import { Field } from './styles'

export default ({ placeholder, type = 'text' }) => {
  const isDropdown = type === 'dropdown'
  const isReadOnly = isDropdown
  const dropdownClass = isDropdown ? 'field__dropdown' : ''

  return (
    <Field className="field">
      <label htmlFor={`Field${shortid.generate()}`}>
        {placeholder}
        <div className={`field__input ${dropdownClass}`}>
          <input
            type="text"
            readOnly={isReadOnly}
            id={`Field${shortid.generate()}`}
          />
          {isDropdown && (
            <>
              <input className="field__checkbox" type="checkbox" />
              <i className="field__icon fal fa-chevron-down" />
            </>
          )}
        </div>
      </label>
    </Field>
  )
}
