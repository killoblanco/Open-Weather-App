import { Theme } from '@emotion/react'
import { WavesTwoTone } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Box } from '../../atoms/box'
import Card from '../../atoms/card'
import { Text } from '../../atoms/text'

const styles = {
  root: { justifyContent: 'space-between' },
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function HumidityCard({ current }: { current: WeatherApiState['current'] }) {
  const { t } = useTranslation()
  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <WavesTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
          {t('weather.humidity')}
        </Text>
      </Box>
      <Text variant="display1">
        {current.humidity}
        %
      </Text>
    </Card>
  )
}

export default HumidityCard
