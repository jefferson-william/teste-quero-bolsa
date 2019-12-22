import React from 'react'
import { hot } from 'react-hot-loader/root'
import GlobalStyles from '~/styles/global'
import GlobalFonts from '~/styles/fonts'
import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import Breadcrumb from '~/components/Breadcrumb'
import Main from '~/components/Main'
import Footer from '~/components/Footer'
import { App, Wrap } from './styles'

function Initial() {
  return (
    <App>
      <GlobalStyles />
      <GlobalFonts />
      <Wrap>
        <Header />
        <Navigation />
        <Breadcrumb />
        <Main />
      </Wrap>
      <Footer />
    </App>
  )
}

export default hot(Initial)
