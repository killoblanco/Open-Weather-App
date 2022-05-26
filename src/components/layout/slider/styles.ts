import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    maxWidth: theme.spacing(76),
    display: 'grid',
    gridTemplateAreas: '"slides" "dots"',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto',
    gridGap: theme.spacing(2),
    margin: '0 auto',
    width: `calc(100vw - ${theme.spacing(4)})`,
    height: `calc(100vh - ${theme.spacing(5)})`
  }),
  slides: (theme: Theme): any => ({
    gridArea: 'slides',
    gap: theme.spacing(4),
    display: 'flex',
    scrollSnapType: 'x mandatory',
    overflow: 'auto hidden',
    width: 'fit-content',
    '& > div': { scrollSnapAlign: 'start' }
  }),
  dots: {
    gridArea: 'dots',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  } as CSSProperties
}

export default styles
