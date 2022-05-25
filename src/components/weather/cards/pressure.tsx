import { Theme } from '@emotion/react'
import { SpeedTwoTone } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'
import PressureMeter from '../meters/pressure'

const styles = {
  root: { justifyContent: 'space-between' },
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function PressureCard({ current }: { current: WeatherApiState['current'] }) {
  const { t } = useTranslation()
  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <SpeedTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
          {t('weather.pressure')}
        </Text>
      </Box>
      <PressureMeter current={current} />
    </Card>
  )
}

export default PressureCard
