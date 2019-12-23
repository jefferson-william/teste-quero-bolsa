import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { hot } from 'react-hot-loader/root'
import GlobalStyles from '~/styles/global'
import GlobalFonts from '~/styles/fonts'
import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import Breadcrumb from '~/components/Breadcrumb'
import Main from '~/components/Main'
import Footer from '~/components/Footer'
import { store, persistor } from '~/store'
import { App, Wrap } from './styles'

function Initial() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default hot(Initial)
