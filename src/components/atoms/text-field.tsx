import { Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { nanoid } from '@reduxjs/toolkit'
import { ChangeEvent, CSSProperties } from 'react'
import { Box } from './box'
import { Text } from './text'

interface TextFieldProps {
  label: string
  value: string
  // eslint-disable-next-line no-unused-vars
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1)
  }),
  label: (theme: Theme): CSSProperties => ({ paddingLeft: theme.spacing(2) })
}

const Input = styled.input(({ theme }) => ({
  backgroundColor: theme.colors.main[theme.colors.mode].secondaryContainer,
  border: 'none',
  borderRadius: theme.borderRadius,
  color: theme.colors.main[theme.colors.mode].onSecondaryContainer,
  outline: 'none',
  padding: theme.spacing(2),
  ...theme.typography.styles.body1
}))

function TextField({ label, value, onChange }: TextFieldProps) {
  const id = nanoid(6)

  return (
    <Box sx={styles.root}>
      <Text as="label" variant="subtitle1" htmlFor={id} sx={styles.label}>
        {label}
      </Text>
      <Input type="text" id={id} value={value} onChange={onChange} />
    </Box>
  )
}

export default TextField
