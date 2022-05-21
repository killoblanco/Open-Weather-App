import { Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'

export interface BoxProps {
  sx?: CSSProperties | ((theme: Theme) => CSSProperties)
}

export const Box = styled(motion.div)<BoxProps>(({
  theme,
  sx
}) => ({ ...(sx ? (typeof sx === 'function' ? sx(theme) : sx) : {}) }))
