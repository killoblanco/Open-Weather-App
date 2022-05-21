import { colors } from './colors'
import { typography } from './typography'

export const spacing = (all: number, leftRight?: number, bottom?: number, left?: number) => {
  return [all, leftRight, bottom, left]
    .filter(Boolean)
    .map(n => n! * 8)
    .map(n => `${n}px`)
    .join(' ')
}

export const theme = {
  colors,
  spacing,
  typography
}
