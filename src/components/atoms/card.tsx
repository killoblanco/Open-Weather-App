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
  width: theme.spacing(19.8),
  '& *': { color: theme.colors.main[theme.colors.mode].onSecondaryContainer }
}))
