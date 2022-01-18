import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './ButtonV2.styles';

export interface ButtonV2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'standard';
  radius?: 'standard' | 'round';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'white';
}

export const ButtonV2: React.FC<ButtonV2Props> = ({
  children,
  variant = 'primary',
  size = 'standard',
  radius = 'standard',
  ...rest
}) => {
  return (
    <StyledButton variant={variant} size={size} radius={radius} {...rest}>
      {children}
    </StyledButton>
  );
};
