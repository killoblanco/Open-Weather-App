import { PropsWithChildren } from 'react'
import { Text, TextProps } from './text'

export const SunkenText = ({ children, ...props }: PropsWithChildren<TextProps>) => (
  <Text
    {...props}
    sx={{
      fontWeight: 600
    }}
  >
    {children}
  </Text>
)
