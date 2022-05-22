import { Theme } from '@emotion/react'
import { OpacityTwoTone, ThermostatTwoTone, WavesTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'

const styles = {
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function HumidityCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card>
      <Box sx={styles.row}>
        <WavesTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>humedad</Text>
      </Box>
      <Text variant="h1">{current.humidity} %</Text>
    </Card>
  )
}

export default HumidityCard
