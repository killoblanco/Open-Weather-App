import styled from '@emotion/styled'
import { Box } from './box'

export const Card = styled(Box)(({ theme }) => ({
  aspectRatio: '1 / 1',
  backgroundColor: theme.colors.main[theme.colors.mode].secondaryContainer,
  backdropFilter: `blur(${theme.spacing(0.5)})`,
  borderRadius: theme.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1.5),
  maxWidth: theme.spacing(20),
  minWidth: theme.spacing(17),
  flex: 1,
  '& *': { color: theme.colors.main[theme.colors.mode].onSecondaryContainer }
}))
