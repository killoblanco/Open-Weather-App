import { Theme } from '@emotion/react'
import { AirTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'
import WindMeter from '../meters/wind'

const styles = {
  root: { justifyContent: 'space-between' },
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function WindCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <AirTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>viento</Text>
      </Box>
      <WindMeter current={current} />
    </Card>
  )
}

export default WindCard
