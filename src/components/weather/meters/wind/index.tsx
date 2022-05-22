import { CircleTwoTone, RemoveTwoTone, SendTwoTone } from '@mui/icons-material'
import { Box } from '../../../atoms/box'
import { Text } from '../../../atoms/text'
import { styles } from './styles'

function WindMeter({ current }: { current: WeatherApiState['current'] }) {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.compassStop} />
      <Box sx={styles.compassCardinals}>
        <Box> <RemoveTwoTone /> <Text variant="caption">N</Text> </Box>
        <Box> <RemoveTwoTone /> <Text variant="caption">E</Text> </Box>
        <Box> <RemoveTwoTone /> <Text variant="caption">S</Text> </Box>
        <Box> <RemoveTwoTone /> <Text variant="caption">O</Text> </Box>
      </Box>
      <Box sx={styles.compass(current.windDegree || 0)}>
        <SendTwoTone fontSize="small" />
        <CircleTwoTone fontSize="small" />
      </Box>
      <Box sx={styles.info}>
        <Text variant="h1">{current.windKph}</Text>
        <Text variant="subtitle1">Km/h</Text>
      </Box>
    </Box>
  )
}

export default WindMeter
