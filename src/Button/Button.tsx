import * as React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'standard' | 'outline' | 'ghost';
  borderRadius?: 'small' | 'standard' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * @deprecated This Button component is deprecated and will be removed in the next major version.
 * Please use the new ButtonV2 component instead.
 */
export const Button: React.FC<ButtonProps> = props => {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('Button component is deprecated. Please use ButtonV2 instead.');
    }
  }, []);

  return <StyledButton {...props}>{props.children}</StyledButton>;
};
