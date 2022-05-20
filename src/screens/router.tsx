import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundScreen from './404'
import MainScreen from './main'
import NewLocationScreen from './new-location'
import SettingsScreen from './settings'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/new-location" element={<NewLocationScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
