import { colors } from './colors';
import { typography } from './typography';

export const spacing = (
  all: number,
  leftRight?: number,
  bottom?: number,
  left?: number
) => [all, leftRight, bottom, left]
  .filter((n) => (n === 0 ? true : Boolean(n)))
  .map((n) => n && n * 8)
  .map((n) => `${n}px`)
  .join(' ');

export const theme = {
  borderRadius: 12,
  colors,
  spacing,
  transitions: {
    timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: {
      quick: '200ms',
      fast: '250ms',
      normal: '300ms',
    },
  },
  typography,
};
