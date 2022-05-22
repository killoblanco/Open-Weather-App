import { Theme } from '@emotion/react'
import { VisibilityTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'

const styles = {
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function VisibilityCard({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Card>
      <Box sx={styles.row}>
        <VisibilityTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>visibilidad</Text>
      </Box>
      <Text variant="h1">{current.visKm} Km</Text>
    </Card>
  )
}

export default VisibilityCard
