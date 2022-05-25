import styled from '@emotion/styled'
import { createElement, HTMLProps, PropsWithChildren } from 'react'
import { TextVariant } from '../../styles/typography'
import { BoxProps } from './box'

export interface TextProps extends BoxProps {
  variant?: TextVariant
}

export const Text = (
  { variant, as, children, sx, ...props }: PropsWithChildren<TextProps & any>
) => createElement(
  styled((as || 'p') as any)(({ theme }) => ({
    ...theme.typography.styles[variant || 'body1'],
    ...(sx ? (typeof sx === 'function' ? sx(theme) : sx) : {})
  })),
  props as any,
  children
)
