import '@emotion/react'
import { Colors } from './colors'
import { spacing } from './theme'
import { Typography } from './typography'

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors,
    spacing: typeof spacing,
    typography: Typography,
  }
}
