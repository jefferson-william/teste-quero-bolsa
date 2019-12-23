import React, { useEffect } from 'react'
import { Field } from './styles'

let fieldCount = 0

export default ({ placeholder, type = 'text' }) => {
  const isDropdown = type === 'dropdown'
  const isReadOnly = isDropdown
  const dropdownClass = isDropdown ? 'field__dropdown' : ''

  useEffect(() => {
    fieldCount += 1
  }, [])

  return (
    <Field className="field">
      <label htmlFor={`Field${fieldCount}`}>
        {placeholder}
        <div className={`field__input ${dropdownClass}`}>
          <input type="text" readOnly={isReadOnly} id={`Field${fieldCount}`} />
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
