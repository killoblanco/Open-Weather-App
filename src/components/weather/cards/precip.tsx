import { Theme } from '@emotion/react'
import { OpacityTwoTone } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
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

function PrecipCard({ current }: { current: WeatherApiState['current'] }) {
  const { t } = useTranslation()
  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <OpacityTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
          {t('weather.precip')}
        </Text>
      </Box>
      <Text variant="display3">{current.precipMm} mm</Text>
    </Card>
  )
}

export default PrecipCard
