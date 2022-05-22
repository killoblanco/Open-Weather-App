import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'

const stops = (theme: Theme) => Array
  .from({ length: 128 }, (_, i) => i + 1)
  .map(degree => degree % 2 === 0
    ? `${theme.colors.main[theme.colors.mode].onPrimaryContainer}44`
    : `${theme.colors.main[theme.colors.mode].primaryContainer}44`
  ).join(', ')

const root: CSSProperties = {
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  display: 'grid',
  gridTemplateAreas: '"content"',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
  margin: '0 auto',
  placeItems: 'center',
  position: 'relative',
  width: '84%'
}

const info: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gridArea: 'content',
  justifyContent: 'center',
  zIndex: 7
}

const thumb = (deg: number) => (theme: Theme): any => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gridArea: 'content',
  height: '110%',
  justifyContent: 'space-between',
  transform: `rotate(${deg + 225}deg)`,
  transition: `all ${theme.transitions.duration.normal} ${theme.transitions.timing}`,
  zIndex: 5,
  '& svg:first-of-type': {
    fill: theme.colors.main[theme.colors.mode].primary,
    transform: 'rotate(-90deg) scale(0.9)'
  },
  '& svg:last-of-type': {
    fill: theme.colors.main[theme.colors.mode].secondary,
    transform: 'rotate(-90deg) scale(0.75)'
  }
})

const scale = (theme: Theme) => ({
  backgroundImage: `
    radial-gradient(circle at center, ${theme.colors.main[theme.colors.mode].primaryContainer} 62%, transparent 30%),
    conic-gradient(
      from 135deg at center,
      ${theme.colors.main[theme.colors.mode].primaryContainer} 45deg,
      ${theme.colors.main[theme.colors.mode].primaryContainer} 90deg,
      transparent 90deg
    ),
    conic-gradient(from 0deg at center, ${stops(theme)})
  `,
  borderRadius: '50%',
  height: '100%',
  gridArea: 'content',
  width: '100%',
  zIndex: 1
})

export const styles = { root, info, thumb, scale }
