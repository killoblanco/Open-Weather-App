import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
})

const Spinner = styled.div<{ size?: number }>(({ theme, size }) => ({
  animation: `${spin} 1s linear infinite`,
  aspectRatio: '1 / 1',
  border: `${theme.spacing(1)} solid transparent`,
  borderTopColor: theme.colors.main[theme.colors.mode].primary,
  borderRadius: '50%',
  placeSelf: 'center',
  width: theme.spacing(size || 10)
}))

export default Spinner
