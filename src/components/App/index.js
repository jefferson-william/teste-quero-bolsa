import React from 'react'
import GlobalStyles from '~/styles/global'
import GlobalFonts from '~/styles/fonts'
import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import { App } from './styles'

export default () => {
  return (
    <App>
      <GlobalStyles />
      <GlobalFonts />
      <Header />
      <Navigation />
    </App>
  )
}
