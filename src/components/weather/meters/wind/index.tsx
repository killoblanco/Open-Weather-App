import { CircleTwoTone, RemoveTwoTone, SendTwoTone } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Box } from '../../../atoms/box'
import { Text } from '../../../atoms/text'
import { styles } from './styles'

function WindMeter({ current }: { current: WeatherApiState['current'] }) {
  const { t } = useTranslation()

  return (
    <Box sx={styles.root}>
      <Box sx={styles.compassStop} />
      <Box sx={styles.compassCardinals}>
        <Box> <RemoveTwoTone /> <Text variant="caption">{t('compass.north')}</Text> </Box>
        <Box> <RemoveTwoTone /> <Text variant="caption">{t('compass.east')}</Text> </Box>
        <Box> <RemoveTwoTone /> <Text variant="caption">{t('compass.south')}</Text> </Box>
        <Box> <RemoveTwoTone /> <Text variant="caption">{t('compass.west')}</Text> </Box>
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
