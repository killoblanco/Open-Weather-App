import '@emotion/react'
import { Colors } from './colors'
import { spacing } from './theme'
import { Typography } from './typography'

declare module '@emotion/react' {
  export interface Theme {
    borderRadius: number,
    colors: Colors,
    spacing: typeof spacing,
    transitions: {
      duration: {
        quick: string;
        fast: string;
        normal: string;
      };
      timing: string;
    }
    typography: Typography,
  }
}
