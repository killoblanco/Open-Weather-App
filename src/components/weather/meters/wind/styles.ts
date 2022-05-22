import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'

const compassStops = (theme: Theme) => Array
  .from({ length: 241 }, (_, i) => i + 1)
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

const compass = (deg: number) => (theme: Theme): any => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gridArea: 'content',
  height: '110%',
  justifyContent: 'space-between',
  transform: `rotate(${deg}deg)`,
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

const compassStop = (theme: Theme) => ({
  backgroundImage: `
    radial-gradient(circle at center, ${theme.colors.main[theme.colors.mode].primaryContainer} 62%, transparent 30%),
    conic-gradient(from 0deg at center, ${compassStops(theme)})
  `,
  borderRadius: '50%',
  height: '100%',
  gridArea: 'content',
  width: '100%',
  zIndex: 1
})

const compassCardinals = (theme: Theme): any => ({
  gridArea: 'content',
  height: '100%',
  width: '100%',
  zIndex: 3,
  position: 'relative',
  '& > div': {
    alignItems: 'center',
    display: 'flex',
    gap: theme.spacing(0.25),
    justifyContent: 'center',
    position: 'absolute',
    '& > svg': {
      fill: theme.colors.main[theme.colors.mode].primary,
      height: theme.spacing(2),
      weight: theme.spacing(2)
    },
  },
  '& > div:nth-of-type(1)': {
    flexDirection: 'column',
    left: 'calc(50% - 12px)',
    top: -4,
    '& > svg': { transform: 'rotate(90deg)' },
    '& > p': { margin: theme.spacing(-0.75) }
  },
  '& > div:nth-of-type(2)': {
    flexDirection: 'row-reverse',
    right: -8,
    top: 'calc(50% - 8px)',
    '& > p': { margin: theme.spacing(-0.75) }
  },
  '& > div:nth-of-type(3)': {
    bottom: -4,
    flexDirection: 'column-reverse',
    left: 'calc(50% - 12px)',
    '& > svg': { transform: 'rotate(90deg)' },
    '& > p': { margin: theme.spacing(-0.75) }
  },
  '& > div:nth-of-type(4)': {
    top: 'calc(50% - 8px)',
    left: -8,
    '& > p': { margin: theme.spacing(-0.75) }
  }
})

export const styles = { root, info, compass, compassStop, compassCardinals }
