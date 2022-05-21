import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'
import { Box } from '../components/atoms/box'
import { Text } from '../components/atoms/text'
import BackBtn from '../components/buttons/back-btn'
import ColorSwitch from '../components/settings/color-switch'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2)
  }),
  row: (justify?: CSSProperties['justifyContent']) => (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: justify || 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2)
  })
}

function SettingsScreen() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.row('flex-start')}>
        <BackBtn />
        <Text variant="h4">Configuración</Text>
      </Box>
      <Box>
        <ColorSwitch />
      </Box>
    </Box>
  )
}

export default SettingsScreen
