import * as React from 'react';
import { StyledButton } from './Button.styles';

export interface Props {
  text: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = (props: Props): JSX.Element => <StyledButton {...props}>{props.text}</StyledButton>;
