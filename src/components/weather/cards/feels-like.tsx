import { Theme } from '@emotion/react'
import { ThermostatTwoTone } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { useSettings } from '../../../hooks/use-settings'
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
  const { t } = useTranslation()
  const { state: { degMeasure, lang } } = useSettings()

  const temp = (current: any): number => degMeasure === 'c' ? current.feelslikeC : current.feelslikeF

  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <ThermostatTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
          {t('weather.feelsLike')}
        </Text>
      </Box>
      <Text variant="display1">{temp(current).toFixed(0)}º</Text>
    </Card>
  )
}

export default FeelsLikeCard
