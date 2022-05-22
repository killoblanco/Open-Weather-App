import { Theme } from '@emotion/react'
import { SpeedTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'

const styles = {
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function PressureCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card>
      <Box sx={styles.row}>
        <SpeedTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>presión</Text>
      </Box>
      <Text variant="h1">{current.pressureMb} Km</Text>
    </Card>
  )
}

export default PressureCard
