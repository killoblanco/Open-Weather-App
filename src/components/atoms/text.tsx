import styled from '@emotion/styled'
import { createElement, PropsWithChildren } from 'react'
import { TextVariant } from '../../styles/typography'
import { BoxProps } from './box'

export interface TextProps extends BoxProps {
  variant?: TextVariant
}

export function Text({
  variant, as, children, sx, ...props
}: PropsWithChildren<TextProps & any>) {
  return createElement(
    styled((as || 'p') as any)(({ theme }) => ({
      ...theme.typography.styles[variant || 'body1'],
      ...(sx ? (typeof sx === 'function' ? sx(theme) : sx) : {})
    })),
    props as any,
    children
  )
}

Text.defaultProps = { variant: 'body1' }
