import { Theme } from '@emotion/react'
import { CSSProperties, PropsWithChildren } from 'react'
import { Box } from '../atoms/box'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    margin: '0 auto',
    maxWidth: theme.spacing(55),
    padding: theme.spacing(2),
  })
}


function Scaffold({ children }: PropsWithChildren<unknown>) {
  return (
    <Box sx={styles.root}>
      {children}
    </Box>
  )
}

export default Scaffold
