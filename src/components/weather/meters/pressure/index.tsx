import { SendTwoTone } from '@mui/icons-material'
import { Box } from '../../../atoms/box'
import { Text } from '../../../atoms/text'
import styles from './styles'

function PressureMeter({ current }: { current: WeatherApiState['current'] }) {
  const thumbPosition = (pressure?: number) => {
    if (!pressure || pressure <= 950) return 0
    if (pressure >= 1050) return 1
    return (pressure - 950) * 3.15
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.scale} />
      <Box sx={styles.thumb(thumbPosition(current.pressureMb))}>
        <SendTwoTone fontSize="small" />
      </Box>
      <Box sx={styles.info}>
        <Text variant="h1">{current.pressureMb}</Text>
        <Text variant="subtitle1">hPa</Text>
      </Box>
    </Box>
  )
}

export default PressureMeter
