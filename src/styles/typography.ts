export interface TypographyOptions {
  fontWeight: 'medium' | 'normal' | 'bold' | 'bolder' | 'lighter' | 'initial' | 'inherit' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  fontSize: number;
  lineHeight: string;
  letterSpacing: number;
}

export type TextVariant =
  'display1'
  | 'display2'
  | 'display3'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export interface Typography {
  fontFamily: string;
  styles: { [key in TextVariant]: TypographyOptions };
}

export const typography: Typography = {
  fontFamily: 'sans-serif',
  styles: {
    display1: {
      fontWeight: 'normal',
      fontSize: 64,
      lineHeight: '76px',
      letterSpacing: -0.5,
    },
    display2: {
      fontWeight: 'normal',
      fontSize: 57,
      lineHeight: '64px',
      letterSpacing: -0.25,
    },
    display3: {
      fontWeight: 'normal',
      fontSize: 45,
      lineHeight: '52px',
      letterSpacing: 0,
    },
    h1: {
      fontWeight: 'normal',
      fontSize: 36,
      lineHeight: '44px',
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 'normal',
      fontSize: 32,
      lineHeight: '40px',
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 'normal',
      fontSize: 28,
      lineHeight: '36px',
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 'normal',
      fontSize: 24,
      lineHeight: '32px',
      letterSpacing: 0,
    },
    h5: {
      fontWeight: 'normal',
      fontSize: 22,
      lineHeight: '28px',
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 'normal',
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: 0,
    },
    subtitle1: {
      fontWeight: 'medium',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0.1,
    },
    subtitle2: {
      fontWeight: 'medium',
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0.1,
    },
    body1: {
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0.5,
    },
    body2: {
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0.25,
    },
    button: {
      fontWeight: 'medium',
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0.1,
    },
    caption: {
      fontWeight: 'normal',
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0.4,
    },
    overline: {
      fontWeight: 'medium',
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0.5,
    },
  }
}
