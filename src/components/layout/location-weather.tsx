import { Theme } from '@emotion/react'
import { useAstronomyQuery, useForecastQuery } from '../../duck/api'
import { useSettings } from '../../hooks/use-settings'
import { Box } from '../atoms/box'
import ForecastDay from '../forecast/day'
import ForecastNextDays from '../forecast/next-days'
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
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    overflow: 'hidden'
  }),
  cards: (theme: Theme): any => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(2)
  })
}

function LocationWeatherLayout({ location }: { location: string }) {
  const { state: { lang } } = useSettings()
  const forecast = useForecastQuery({ q: location, lang })
  const astronomy = useAstronomyQuery({ q: location, lang })

  const isLoading = forecast.isLoading || astronomy.isLoading
  const isMissingData = !forecast.data || !astronomy.data

  if (isMissingData || isLoading) return (<Box>Loading ...</Box>)

  const forecastData = forecast.data!
  const astronomyData = astronomy.data!

  return (
    <Box sx={styles.root}>
      <RealtimeWeatherInfo weather={forecastData} />
      <ForecastDay day={forecastData.forecast[0].hour} />
      <ForecastNextDays forecast={forecastData.forecast} />
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
