import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('App exist', () => {
  const app = render(<App />)

  expect(app).not.toBeNull()
})
