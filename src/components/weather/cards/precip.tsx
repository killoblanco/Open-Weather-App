import { Theme } from '@emotion/react'
import { AirTwoTone, OpacityTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'

const styles = {
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function PrecipCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card>
      <Box sx={styles.row}>
        <OpacityTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>precipitacion</Text>
      </Box>
      <Text variant="h1">{current.precipMm} mm</Text>
    </Card>
  )
}

export default PrecipCard
