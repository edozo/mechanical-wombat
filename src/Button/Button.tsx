import * as React from 'react';
import { StyledButton, StyleProps } from './Button.styles';

export interface Props extends StyleProps {
  children: React.ReactNode;
}

export const Button = (props: Props): JSX.Element => <StyledButton {...props}>{props.children} - append</StyledButton>;
