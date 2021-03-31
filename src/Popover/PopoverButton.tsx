import React from 'react';
import { StyledButton } from './Popover.styles';

export const PopoverButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <StyledButton type="button" {...rest}>
    {children}
  </StyledButton>
);
