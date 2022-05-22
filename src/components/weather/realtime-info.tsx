import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'
import { Box } from '../atoms/box'
import { SunkenText } from '../atoms/sunken-text'
import SettingsBtn from '../buttons/settings-btn'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
  }),
  row: (justify?: CSSProperties['justifyContent']) => (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: justify || 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2)
  })
}

function RealtimeWeatherInfo({ weather }: { weather: ForecastQueryResponse }) {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.row()}>
        <SunkenText variant="display2">{weather.location.name}</SunkenText>
        <SettingsBtn />
      </Box>
      <Box sx={styles.row('space-evenly')}>
        <SunkenText variant="display1">{weather.current.tempC} ºC</SunkenText>
      </Box>
      <SunkenText variant="display3">{weather.current.condition.text}</SunkenText>
    </Box>
  )
}

export default RealtimeWeatherInfo
