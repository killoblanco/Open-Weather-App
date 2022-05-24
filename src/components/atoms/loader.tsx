import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Backdrop } from '../scaffold/backdrop'

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
})

const Spinner = styled.div(({ theme }) => ({
  animation: `${spin} 1s linear infinite`,
  aspectRatio: '1 / 1',
  border: `${theme.spacing(1)} solid transparent`,
  borderTopColor: theme.colors.main[theme.colors.mode].primary,
  borderRadius: '50%',
  width: theme.spacing(10)
}))

export const Loader = () => {
  return (
    <Backdrop justify="center">
      <Spinner />
    </Backdrop>
  )
}
