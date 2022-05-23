import { StrictMode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import Scaffold from './components/scaffold'
import { store } from './duck/store'
import i18n from './locales'
import Router from './screens/router'
import StylesProvider from './styles/provider'

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <StylesProvider>
            <Scaffold>
              <Router />
            </Scaffold>
          </StylesProvider>
        </I18nextProvider>
      </Provider>
    </StrictMode>
  )
}

export default App
