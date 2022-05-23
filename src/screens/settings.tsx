import { Theme } from '@emotion/react'
import { Brightness4TwoTone, PaletteTwoTone, ThermostatTwoTone, TranslateTwoTone } from '@mui/icons-material'
import { CSSProperties, useContext } from 'react'
import { Box } from '../components/atoms/box'
import ListItem from '../components/atoms/list-item'
import { Text } from '../components/atoms/text'
import BackBtn from '../components/buttons/back-btn'
import { ScaffoldCtx } from '../components/scaffold/context'
import ColorSwitch from '../components/settings/color-switch'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    margin: '0 auto',
    maxWidth: theme.spacing(70),
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
  const { dialogs } = useContext(ScaffoldCtx)
  return (
    <Box sx={styles.root}>
      <Box sx={styles.row('flex-start')}>
        <BackBtn />
        <Text variant="h4">Configuración</Text>
      </Box>
      <Box>
        <ColorSwitch />
        <ListItem
          icon={<PaletteTwoTone />}
          onClick={() => dialogs.actions.open({ title: 'color', content: 'color' })}
          title="Color"
        />
        <ListItem
          icon={<Brightness4TwoTone />}
          onClick={() => dialogs.actions.open({ title: 'dark mode', content: 'dark mode' })}
          title="Modo Oscuro"
        />
        <ListItem
          icon={<ThermostatTwoTone />}
          onClick={() => dialogs.actions.open({ title: 'temp unit', content: 'temp unit' })}
          title="Unidad de Temperatura"
        />
        <ListItem
          icon={<TranslateTwoTone />}
          onClick={() => dialogs.actions.open({ title: 'lang', content: 'lang' })}
          title="Idioma"
        />
      </Box>
    </Box>
  )
}

export default SettingsScreen
