import { nanoid } from '@reduxjs/toolkit'
import LocationWeatherLayout from '../components/layout/location-weather'
import Slider from '../components/layout/slider'
import { useGeo } from '../hooks/use-geo'
import { useLocations } from '../hooks/use-locations'

function MainScreen() {
  useGeo()

  const { state } = useLocations()

  return (
    <Slider
      slides={[
        <LocationWeatherLayout key={nanoid()} location={state.geo} />,
        ...state.list.map(location => (<LocationWeatherLayout key={nanoid()} location={location} />))
      ]}
    />
  )
}

export default MainScreen
