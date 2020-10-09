import React from 'react';
import { StyledListItem, StyleProps } from './ListItem.styles';

export const ListItem: React.FC<StyleProps> = ({ disabled, children, onClick, ...rest }) =>
  disabled ? (
    <StyledListItem disabled={disabled} {...rest}>
      {children}
    </StyledListItem>
  ) : (
    <StyledListItem onClick={onClick} {...rest}>
      {children}
    </StyledListItem>
  );
