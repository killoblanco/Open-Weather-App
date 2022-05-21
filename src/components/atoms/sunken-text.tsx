import { PropsWithChildren } from 'react'
import { Text, TextProps } from './text'

export const SunkenText = ({ children, ...props }: PropsWithChildren<TextProps>) => (
  <Text
    {...props}
    sx={(theme) => ({
      fontWeight: 600,
      color: theme.colors.main[theme.colors.mode].primary
    })}
  >
    {children}
  </Text>
)
