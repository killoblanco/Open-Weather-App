import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import Scaffold from './components/scaffold'
import { store } from './duck/store'
import Router from './screens/router'
import StylesProvider from './styles/provider'

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <StylesProvider>
          <Scaffold>
            <Router />
          </Scaffold>
        </StylesProvider>
      </Provider>
    </StrictMode>
  )
}

export default App
