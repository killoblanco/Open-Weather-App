import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'
import { useRealtimeQuery } from '../../duck/api'
import { useGeo } from '../../hooks/use-geo'
import { Box } from '../atoms/box'
import { SunkenText } from '../atoms/sunken-text'
import { Text } from '../atoms/text'
import SettingsBtn from '../buttons/settings-btn'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2)
  }),
  row: (justify?: CSSProperties['justifyContent']) => (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: justify || 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2)
  })
}


function RealtimeWeatherInfo() {
  const geo = useGeo()
  const location = geo ? `${geo.coords.latitude},${geo.coords.longitude}` : 'auto:ip'
  const realtime = useRealtimeQuery(location)

  if (!realtime.data || realtime.isLoading) return <div>Loading...</div>

  const { data } = realtime

  return (
    <Box sx={styles.root}>
      <Box sx={styles.row()}>
        <SunkenText variant="display2">{data.location.name}</SunkenText>
        <SettingsBtn />
      </Box>
      <Box sx={styles.row('space-evenly')}>
        <Box>
          <SunkenText variant="display1">{data.current.tempC}º</SunkenText>
        </Box>
      </Box>
      <SunkenText variant="display3">{data.current.condition.text}</SunkenText>
      <Box sx={styles.row('space-evenly')}>
        <Text variant="subtitle1">Humedad {data.current.humidity}%</Text>
        <Text variant="subtitle1">Nubes {data.current.cloud}%</Text>
        <Text variant="subtitle1">UV {data.current.uv}</Text>
      </Box>
    </Box>
  )
}

export default RealtimeWeatherInfo
