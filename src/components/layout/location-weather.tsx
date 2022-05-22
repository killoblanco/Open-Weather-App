import { Theme } from '@emotion/react'
import { useAstronomyQuery, useForecastQuery } from '../../duck/api'
import { Box } from '../atoms/box'
import FeelsLikeCard from '../weather/cards/feels-like'
import HumidityCard from '../weather/cards/humidity'
import PrecipCard from '../weather/cards/precip'
import PressureCard from '../weather/cards/pressure'
import SunRiseSetCard from '../weather/cards/sun-rise-set'
import UvCard from '../weather/cards/uv'
import VisibilityCard from '../weather/cards/visibility'
import WindCard from '../weather/cards/wind'
import RealtimeWeatherInfo from '../weather/realtime-info'

const styles = {
  root: (theme: Theme): any => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
  }),
  cards: (theme: Theme): any => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    '& > div': { flex: '38%' }
  })
}

function LocationWeatherLayout({ location }: { location: string }) {
  const forecast = useForecastQuery(location)
  const astronomy = useAstronomyQuery(location)

  const isLoading = forecast.isLoading || astronomy.isLoading
  const isMissingData = !forecast.data || !astronomy.data

  if (isMissingData || isLoading) return (<Box>Loading ...</Box>)

  const forecastData = forecast.data!
  const astronomyData = astronomy.data!

  return (
    <Box sx={styles.root}>
      <RealtimeWeatherInfo weather={forecastData} />
      <Box sx={styles.cards}>
        <UvCard uv={forecastData.current.uv} />
        <SunRiseSetCard astro={astronomyData} />
        <WindCard current={forecastData.current} />
        <PrecipCard current={forecastData.current} />
        <FeelsLikeCard current={forecastData.current} />
        <HumidityCard current={forecastData.current} />
        <VisibilityCard current={forecastData.current} />
        <PressureCard current={forecastData.current} />
      </Box>
    </Box>
  )
}

export default LocationWeatherLayout
