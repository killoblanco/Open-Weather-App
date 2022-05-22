import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'
import { Box } from '../../atoms/box'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    backgroundImage: `linear-gradient(
      to right,
      #8ffb76,
      #f2e700,
      #fa920f,
      #e2300e,
      #57124e
    )`,
    borderRadius: theme.borderRadius,
    height: theme.spacing(1.5),
    overflow: 'hidden',
    position: 'relative',
    width: '100%'
  }),
  cursor: (position: number) => (theme: Theme): CSSProperties => ({
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.main[theme.colors.mode].secondaryContainer,
    border: `solid 1px ${theme.colors.main[theme.colors.mode].onSecondaryContainer}`,
    height: theme.spacing(1.5),
    left: `${position}%`,
    position: 'absolute',
    transition: `all ${theme.transitions.duration.normal} ${theme.transitions.timing}`,
    top: -1,
    width: theme.spacing(0.25),
  })
}

function UvMeter({ uv }: { uv: number }) {
  const position = uv >= 11 ? 97 : uv * 9
  return (
    <Box sx={styles.root}>
      <Box sx={styles.cursor(position)} />
    </Box>
  )
}

export default UvMeter
