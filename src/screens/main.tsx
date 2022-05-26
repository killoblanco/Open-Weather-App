import { nanoid } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import LocationWeatherLayout from '../components/layout/location-weather'
import Slider from '../components/layout/slider'
import useGeo from '../hooks/use-geo'
import useLocations from '../hooks/use-locations'

function MainScreen() {
  useGeo()

  const { state } = useLocations()

  const slides = useMemo(() => ({
    [state.geo]: <LocationWeatherLayout key={nanoid()} location={state.geo} />,
    ...state.list
      .map((location) => ({
        [location]: <LocationWeatherLayout key={nanoid()} location={location} />
      }))
      .reduce((acc, cur) => ({ ...acc, ...cur }), {})
  }), [state.geo, state.list])

  return (
    <Slider slides={slides} />
  )
}

export default MainScreen
