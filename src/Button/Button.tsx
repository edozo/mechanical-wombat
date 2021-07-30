import * as React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'standard' | 'outline' | 'ghost';
  borderRadius?: 'small' | 'standard' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = props => <StyledButton {...props}>{props.children}</StyledButton>;
