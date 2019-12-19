import * as React from 'react';
import { StyledListItem, StyleProps } from './ListItem.styles';

export interface Props extends StyleProps {
  children: React.ReactNode;
}

export const ListItem = (props: Props): JSX.Element => {
  const { disabled, children, ...rest } = props;

  return props.disabled ? (
    <StyledListItem disabled={disabled} {...rest}>
      {children}
    </StyledListItem>
  ) : (
    <StyledListItem {...rest}>{children}</StyledListItem>
  );
};
