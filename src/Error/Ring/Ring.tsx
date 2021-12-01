import React from 'react';
import { StyledRing } from './Ring.styles';

export interface Props {
  opacity?: number;
  padding?: string;
}

export const Ring: React.FC<Props> = ({ children, opacity = 1, padding = '0px', ...rest }) => (
  <StyledRing opacity={opacity} padding={padding} {...rest}>
    {children}
  </StyledRing>
);
