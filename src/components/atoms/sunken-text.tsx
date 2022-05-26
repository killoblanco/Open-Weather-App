/* eslint-disable react/jsx-props-no-spreading */
import { Theme } from '@emotion/react'
import { PropsWithChildren } from 'react'
import { Text, TextProps } from './text'

export function SunkenText({ children, ...props }: PropsWithChildren<TextProps>) {
  return (
    <Text
      {...props}
      sx={(theme: Theme) => ({
        fontWeight: 600,
        color: theme.colors.main[theme.colors.mode].primary,
        textTransform: 'capitalize'
      })}
    >
      {children}
    </Text>
  )
}

export default SunkenText
