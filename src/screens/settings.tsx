import { Theme } from '@emotion/react'
import {
  DarkModeTwoTone,
  LightModeTwoTone,
  PaletteTwoTone,
  SquareFootTwoTone,
  ThermostatTwoTone,
  TranslateTwoTone
} from '@mui/icons-material'
import { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '../components/atoms/box'
import ListItem from '../components/atoms/list-item'
import { Text } from '../components/atoms/text'
import BackBtn from '../components/buttons/back-btn'
import { useDialogs } from '../components/scaffold/context'
import { useSettings } from '../hooks/use-settings'
import { useThemeCtx } from '../styles/provider'

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
  const { t } = useTranslation()
  const dialogs = useDialogs()
  const themeCtx = useThemeCtx()
  const settings = useSettings()

  return (
    <Box sx={styles.root}>
      <Box sx={styles.row('flex-start')}>
        <BackBtn />
        <Text variant="h4" sx={{ textTransform: 'capitalize' }}>
          {t('settings.settings')}
        </Text>
      </Box>
      <Box>
        <ListItem
          icon={<PaletteTwoTone />}
          onClick={() => dialogs.actions.open({ title: t('settings.color'), content: 'colors' })}
          title={t('settings.color')}
        />
        <ListItem
          icon={settings.state.darkMode ? <DarkModeTwoTone /> : <LightModeTwoTone />}
          onClick={themeCtx.toggleMode}
          title={t(settings.state.darkMode ? 'settings.modeDark' : 'settings.modeLight')}
        />
        <ListItem
          icon={<ThermostatTwoTone />}
          onClick={() => dialogs.actions.open({ title: 'temp unit', content: 'temp unit' })}
          title={t('settings.tempUnit')}
        />
        <ListItem
          icon={<SquareFootTwoTone />}
          onClick={() => dialogs.actions.open({ title: 'temp unit', content: 'temp unit' })}
          title={t('settings.measUnit')}
        />
        <ListItem
          icon={<TranslateTwoTone />}
          onClick={() => dialogs.actions.open({ title: t('settings.lang'), content: 'lang' })}
          title={t('settings.lang')}
        />
      </Box>
    </Box>
  )
}

export default SettingsScreen
