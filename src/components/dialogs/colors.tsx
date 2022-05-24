import { Theme, useTheme } from '@emotion/react'
import { nanoid } from '@reduxjs/toolkit'
import { CSSProperties, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSettings } from '../../hooks/use-settings'
import { ColorPaletteMap } from '../../styles/colors'
import { Box } from '../atoms/box'
import ListItem from '../atoms/list-item'
import { ScaffoldCtx } from '../scaffold/context'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    overflow: 'auto',
  }),
  badge: (color: string) => (theme: Theme) => ({
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: '50%',
    backgroundColor: color
  })
}

function LangDialog() {
  const { t } = useTranslation()
  const { actions: { setThemeColor } } = useSettings()
  const { dialogs: { actions: { close } } } = useContext(ScaffoldCtx)
  const { colors: { mode, palette } } = useTheme()

  const colors = useMemo(
    () => Object.entries(palette)
      .map(([name, color]) => ({ [name]: color[mode].primary }))
      .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
    [mode, palette])

  const handleClose = (color: string) => {
    setThemeColor(color as keyof ColorPaletteMap)
    close()
  }

  return (
    <Box sx={styles.root}>
      {Object.entries(colors).map(([name, color]) => (
        <ListItem
          key={nanoid(6)}
          icon={<Box sx={styles.badge(color)} />}
          onClick={() => handleClose(name)}
          title={t(`colors.${name}`)}
        />
      ))}
    </Box>
  )
}

export default LangDialog
