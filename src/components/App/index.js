import React from 'react'
import { hot } from 'react-hot-loader/root'
import GlobalStyles from '~/styles/global'
import GlobalFonts from '~/styles/fonts'
import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import Breadcrumb from '~/components/Breadcrumb'
import { App } from './styles'

function Initial() {
  return (
    <App>
      <GlobalStyles />
      <GlobalFonts />
      <Header />
      <Navigation />
      <Breadcrumb />
    </App>
  )
}

export default hot(Initial)
