import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
