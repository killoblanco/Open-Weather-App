import { Theme } from '@emotion/react'
import { CSSProperties, PropsWithChildren } from 'react'
import { Box } from '../atoms/box'
import { ScaffoldCtxProvider } from './context'
import { Dialogs } from './dialogs'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    margin: '0 auto',
    padding: theme.spacing(2)
  })
}

function Scaffold({ children }: PropsWithChildren<unknown>) {
  return (
    <ScaffoldCtxProvider>
      <Box sx={styles.root}>
        {children}
        <Dialogs />
      </Box>
    </ScaffoldCtxProvider>
  )
}

export default Scaffold
