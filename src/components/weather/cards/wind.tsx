import { Theme } from '@emotion/react'
import { AirTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'

const styles = {
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function WindCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card>
      <Box sx={styles.row}>
        <AirTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>viento</Text>
      </Box>
      <Text variant="h1">{current.windKph}</Text>
      <Text variant="subtitle1">Km/h</Text>
    </Card>
  )
}

export default WindCard
