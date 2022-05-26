import '@emotion/react';
import { Colors } from './colors';
import { spacing } from './theme';
import { TextVariant, Typography, TypographyOptions } from './typography'

export interface Typography {
  fontFamily: string;
  styles: { [key in TextVariant]: TypographyOptions };
}

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
