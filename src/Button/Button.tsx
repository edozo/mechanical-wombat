import * as React from 'react';
import { StyledButton } from './Button.styles';

export interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xsmall' | 'small' | 'base' | 'large' | 'xlarge';
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({ variant = 'primary', size = 'base', disabled, children, ...rest }) => (
  <StyledButton variant={variant} size={size} disabled={disabled} {...rest}>
    {children}
  </StyledButton>
);
