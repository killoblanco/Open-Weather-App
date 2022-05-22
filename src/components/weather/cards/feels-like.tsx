import { Theme } from '@emotion/react'
import { ThermostatTwoTone } from '@mui/icons-material'
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

function FeelsLikeCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <ThermostatTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>sensación</Text>
      </Box>
      <Text variant="display1">{current.feelslikeC.toFixed(0)}º</Text>
    </Card>
  )
}

export default FeelsLikeCard
