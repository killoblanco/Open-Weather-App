import { Theme, ThemeProvider } from '@emotion/react'
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'
import { useSettings } from '../hooks/use-settings'
import { ColorPaletteMap } from './colors'
import GlobalStyles from './globals'
import { theme } from './theme'

interface ThemeCtxT {
  toggleMode: () => void;
  toggleColor: (color: keyof ColorPaletteMap) => void;
}

const ThemeCtx = createContext<ThemeCtxT>({
  toggleMode: () => {
  },
  toggleColor: () => {
  }
})

function StylesProvider({ children }: PropsWithChildren<unknown>) {
  const { state, actions } = useSettings()

  const nextTheme: Theme = useMemo(() => ({
    ...theme,
    colors: {
      ...theme.colors,
      mode: state.darkMode ? 'dark' : 'light',
      main: theme.colors.palette[state.color]
    },
    typography: {
      ...theme.typography,
      fontFamily: '"Signika", sans-serif'
    }
  }), [state.color, state.darkMode])

  const toggleMode = () => {
    actions.setDarkMode(!state.darkMode)
  }

  const toggleColor = (color: keyof ColorPaletteMap) => {
    actions.setThemeColor(color)
  }

  return (
    <ThemeCtx.Provider value={{ toggleColor, toggleMode }}>
      <ThemeProvider theme={nextTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeCtx.Provider>
  )
}

export const useThemeCtx = () => useContext(ThemeCtx)

export default StylesProvider
