import * as React from 'react';
import { StyledList, StyleProps } from './List.styles';

export interface Props extends StyleProps {
  children: React.ReactNode;
}

export const List = (props: Props): JSX.Element => <StyledList {...props}>{props.children}</StyledList>;
