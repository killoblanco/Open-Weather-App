import {
  Global, Interpolation, Theme, useTheme
} from '@emotion/react'
import '@fontsource/signika/300.css'
import '@fontsource/signika/400.css'
import '@fontsource/signika/500.css'
import '@fontsource/signika/600.css'
import '@fontsource/signika/700.css'

function GlobalStyles() {
  const theme = useTheme()

  const styles: Interpolation<Theme> = {
    ':root': {
      fontSize: theme.spacing(2),
      color: theme.colors.main[theme.colors.mode].onBackground
    },
    '*': {
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      padding: 0,
      scrollBehavior: 'smooth',
      transition: `color, background-color ${theme.transitions.duration.quick} ${theme.transitions.timing}`
    },
    svg: { color: theme.colors.main[theme.colors.mode].secondary },
    body: {
      margin: 0,
      backgroundColor: theme.colors.main[theme.colors.mode].background
    }
  }

  return <Global styles={styles} />
}

export default GlobalStyles
