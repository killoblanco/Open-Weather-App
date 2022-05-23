import styled from '@emotion/styled'

export const Backdrop = styled.div(({ theme }) => ({
  alignItems: 'center',
  backdropFilter: `blur(${theme.spacing(0.5)})`,
  backgroundColor: `${theme.colors.main[theme.colors.mode].surface}11`,
  display: 'flex',
  flexDirection: 'column-reverse',
  height: `calc(100vh - ${theme.spacing(8)})`,
  left: 0,
  padding: theme.spacing(4),
  position: 'fixed',
  top: 0,
  width: `calc(100vw - ${theme.spacing(8)})`,
}))
