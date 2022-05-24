import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'
import { useSettings } from '../../hooks/use-settings'
import { Box } from '../atoms/box'
import { SunkenText } from '../atoms/sunken-text'
import SettingsBtn from '../buttons/settings-btn'
import WeatherIcon from './icon'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    maxWidth: theme.spacing(70),
    width: '100%'
  }),
  row: (justify?: CSSProperties['justifyContent']) => (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: justify || 'space-between',
    alignItems: 'center',
    gap: theme.spacing(0)
  })
}

function RealtimeWeatherInfo({ weather }: { weather: ForecastQueryResponse }) {
  const { state: { degMeasure } } = useSettings()

  const currentTemp = degMeasure === 'c' ? weather.current.tempC : weather.current.tempF

  return (
    <Box sx={styles.root}>
      <Box sx={styles.row()}>
        <SunkenText variant="display3">{weather.location.name}</SunkenText>
        <SettingsBtn />
      </Box>
      <Box sx={styles.row('center')}>
        <WeatherIcon code={weather.current.condition.code} isDay={!!weather.current.isDay} />
        <SunkenText variant="display1">{currentTemp}º</SunkenText>
      </Box>
      <SunkenText variant="h1">{weather.current.condition.text}</SunkenText>
    </Box>
  )
}

export default RealtimeWeatherInfo
