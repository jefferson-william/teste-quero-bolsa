import React from 'react'
import Header from '~/components/Header'
import GlobalStyles from '~/styles/global'
import GlobalFonts from '~/styles/fonts'
import { App } from './styles'

export default () => {
  return (
    <App>
      <GlobalStyles />
      <GlobalFonts />
      <Header />
    </App>
  )
}
