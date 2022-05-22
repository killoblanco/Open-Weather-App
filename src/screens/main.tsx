import LocationWeatherLayout from '../components/layout/location-weather'
import { useGeo } from '../hooks/use-geo'

function MainScreen() {
  const geo = useGeo()
  const location = geo ? `${geo.coords.latitude},${geo.coords.longitude}` : 'auto:ip'

  return (
    <LocationWeatherLayout location={location} />
  )
}

export default MainScreen
