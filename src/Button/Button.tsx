import * as React from 'react';
import { StyledButton } from './Button.styles';

export interface Props {
  color?: 'primary' | 'secondary';
  variant?: 'standard' | 'outline' | 'ghost';
  size?: 'small' | 'standard' | 'large';
  borderRadius?: 'small' | 'standard' | 'large';
  disabled?: boolean;
}

export const Button: React.FC<Props> = props => <StyledButton {...props}>{props.children}</StyledButton>;
