import { PropsWithChildren } from 'react'
import { Box } from '../atoms/box'

function Scaffold({ children }: PropsWithChildren<unknown>) {
  return (
    <Box sx={(theme) => ({ padding: theme.spacing(2) })}>
      {children}
    </Box>
  )
}

export default Scaffold
