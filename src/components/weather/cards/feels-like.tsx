import { Theme } from '@emotion/react'
import { OpacityTwoTone, ThermostatTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'

const styles = {
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function FeelsLikeCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card>
      <Box sx={styles.row}>
        <ThermostatTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>sensación</Text>
      </Box>
      <Text variant="h1">{current.feelslikeC} ºC</Text>
    </Card>
  )
}

export default FeelsLikeCard
