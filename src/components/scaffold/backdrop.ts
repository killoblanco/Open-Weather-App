import styled from '@emotion/styled';
import { CSSProperties } from 'react';

const Backdrop = styled.div<{ justify?: CSSProperties['justifyContent'] }>(({ theme, justify }) => ({
  alignItems: 'center',
  backdropFilter: `blur(${theme.spacing(0.5)})`,
  backgroundColor: `${theme.colors.main[theme.colors.mode].surface}11`,
  display: 'flex',
  flexDirection: 'column-reverse',
  height: `calc(100vh - ${theme.spacing(8)})`,
  justifyContent: justify,
  left: 0,
  padding: theme.spacing(4),
  position: 'fixed',
  top: 0,
  width: `calc(100vw - ${theme.spacing(8)})`,
}));

export default Backdrop;
