import { Theme, useTheme } from '@emotion/react'
import { nanoid } from '@reduxjs/toolkit'
import { CSSProperties, useMemo } from 'react'
import { ColorPaletteMap } from '../../styles/colors'
import { useThemeCtx } from '../../styles/provider'
import { Box } from '../atoms/box'
import { Text } from '../atoms/text'

const styles = {
  root: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(2)
  }),
  color: {
    container: (theme: Theme): CSSProperties => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(2),
      cursor: 'pointer'
    }),
    badge: (color: string) => (theme: Theme) => ({
      width: theme.spacing(4),
      height: theme.spacing(4),
      borderRadius: '50%',
      backgroundColor: color
    })
  }
}

function ColorSwitch() {
  const themeCtx = useThemeCtx()
  const { colors: { mode, palette } } = useTheme()

  const colors = useMemo(
    () => Object.entries(palette)
      .map(([name, color]) => ({ [name]: color[mode].primary }))
      .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
    [mode, palette])

  const parseName = (name: string) => name.split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <Box sx={styles.root}>
      {Object.entries(colors).map(([name, color], idx) => (
        <Box
          key={nanoid(6)}
          sx={styles.color.container}
          onClick={() => themeCtx.toggleColor(name as keyof ColorPaletteMap)}
        >
          <Box sx={styles.color.badge(color)} />
          <Text variant="caption">{parseName(name)}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default ColorSwitch
