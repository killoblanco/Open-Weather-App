import { Theme } from '@emotion/react'
import { BedTwoTone, FreeBreakfastTwoTone } from '@mui/icons-material'
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

function SunRiseSetCard({ astro }: { astro: WeatherApiState['astronomy'] }) {
  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <FreeBreakfastTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>amanecer</Text>
      </Box>
      <Text variant="h2">{astro.sunrise}</Text>
      <Text variant="h4">{astro.sunset}</Text>
      <Box sx={styles.row}>
        <BedTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>atardecer</Text>
      </Box>
    </Card>
  )
}

export default SunRiseSetCard
