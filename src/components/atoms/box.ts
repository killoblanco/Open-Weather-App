import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CSSProperties, ElementType } from 'react';

export interface BoxProps {
  // eslint-disable-next-line no-unused-vars
  sx?: CSSProperties | ((theme: Theme) => CSSProperties)
  as?: ElementType
}

export const Box = styled(motion.div)<BoxProps>(({
  theme,
  sx,
}) => ({ ...(sx ? (typeof sx === 'function' ? sx(theme) : sx) : {}) }));
