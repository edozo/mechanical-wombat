import * as React from 'react';
import { StyledListItem, StyleProps } from './ListItem.styles';

export interface Props extends StyleProps {
  children: React.ReactNode;
}

export const ListItem = (props: Props): JSX.Element =>
  props.disabled ? (
    <StyledListItem disabled={props.disabled}>{props.children}</StyledListItem>
  ) : (
    <StyledListItem {...props}>{props.children}</StyledListItem>
  );
