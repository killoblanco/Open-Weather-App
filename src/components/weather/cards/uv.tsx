import { Theme } from '@emotion/react'
import { WbSunnyTwoTone } from '@mui/icons-material'
import { Box } from '../../atoms/box'
import { Card } from '../../atoms/card'
import { Text } from '../../atoms/text'
import UvMeter from '../meters/uv'

const styles = {
  root: { justifyContent: 'space-between', gap: '0px' },
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1)
  })
}

function UvCard({ uv }: { uv: number }) {
  const description = (uv: number) => {
    if (uv > 2 && uv <= 5) return 'Moderado'
    if (uv > 5 && uv <= 7) return 'Alto'
    if (uv > 7 && uv <= 10) return 'Muy Alto'
    if (uv >= 11) return 'Extremo'
    return 'Bajo'
  }

  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <WbSunnyTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>índice uv</Text>
      </Box>
      <Text variant="display1" sx={{ textAlign: 'center' }}>{uv}</Text>
      <Text variant="subtitle1" sx={{ textAlign: 'center' }}>{description(uv)}</Text>
      <UvMeter uv={uv} />
    </Card>
  )
}

export default UvCard
