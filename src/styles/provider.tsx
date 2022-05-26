/* eslint-disable @typescript-eslint/no-empty-function */
import { Theme, ThemeProvider } from '@emotion/react'
import {
  createContext, PropsWithChildren, useContext, useMemo
} from 'react'
import useSettings from '../hooks/use-settings'
import { ColorPaletteMap } from './colors'
import GlobalStyles from './globals'
import { theme } from './theme'

interface ThemeCtxT {
  toggleMode: () => void;
  // eslint-disable-next-line no-unused-vars
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

  const ctx = useMemo(() => ({ toggleMode, toggleColor }), [toggleMode, toggleColor])

  return (
    <ThemeCtx.Provider value={ctx}>
      <ThemeProvider theme={nextTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeCtx.Provider>
  )
}

export const useThemeCtx = () => useContext(ThemeCtx)

export default StylesProvider
