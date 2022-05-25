import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundScreen from './404'
import MainScreen from './main'
import NewLocationScreen from './new-location'
import SettingsScreen from './settings'

export const routes = {
  main: () => '/',
  newLocation: () => '/new-location',
  settings: () => '/settings'
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.main()} element={<MainScreen />} />
        <Route path={routes.newLocation()} element={<NewLocationScreen />} />
        <Route path={routes.settings()} element={<SettingsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
