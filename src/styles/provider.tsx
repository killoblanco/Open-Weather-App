import { ThemeProvider } from '@emotion/react'
import { PropsWithChildren } from 'react'
import GlobalStyles from './globals'
import { theme } from './theme'

function StylesProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default StylesProvider
