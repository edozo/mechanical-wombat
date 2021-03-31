import React from 'react';
import { StyledButton } from './Popover.styles';

export interface ButtonProps {
  onClick: () => void;
  style?: React.CSSProperties; // Can we set this globally somewhere?
  name?: string;
}

export const PopoverButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <StyledButton type="button" {...rest}>
    {children}
  </StyledButton>
);
