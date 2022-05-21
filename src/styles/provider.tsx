import { Theme, ThemeProvider } from '@emotion/react'
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'
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
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [main, setMain] = useState<keyof ColorPaletteMap>('indigo')

  const nextTheme: Theme = useMemo(() => ({
    ...theme,
    colors: {
      ...theme.colors,
      mode,
      main: theme.colors.palette[main]
    },
    typography: {
      ...theme.typography,
      fontFamily: '"Signika", sans-serif'
    }
  }), [mode, main])

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const toggleColor = (color: keyof ColorPaletteMap) => {
    setMain(color)
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
