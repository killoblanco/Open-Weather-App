import styled from '@emotion/styled';
import { BoxProps } from './box';

type IconBtnProps = BoxProps

const IconBtn = styled.button<IconBtnProps & any>(({ theme, sx }) => ({
  backgroundColor: 'transparent',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  ...(sx ? (typeof sx === 'function' ? sx(theme) : sx) : {}),
  '&:hover, &:active, &:focus': { backgroundColor: 'transparent' },
  '& svg': { fontSize: theme.spacing(4) },
}));

IconBtn.defaultProps = { type: 'button' };

export default IconBtn;
