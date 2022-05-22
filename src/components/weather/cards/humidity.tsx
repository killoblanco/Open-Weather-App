import { Theme } from '@emotion/react'
import { OpacityTwoTone, ThermostatTwoTone, WavesTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'

const styles = {
  root: { justifyContent: 'space-between' },
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function HumidityCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <WavesTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>humedad</Text>
      </Box>
      <Text variant="display1">{current.humidity}%</Text>
    </Card>
  )
}

export default HumidityCard
