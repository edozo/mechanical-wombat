import React from 'react';
import { ListItemProps, StyledListItem } from './ListItem.styles';

export const ListItem: React.FC<ListItemProps> = ({ disabled, children, onClick, ...rest }) =>
  disabled ? (
    <StyledListItem disabled={disabled} {...rest}>
      {children}
    </StyledListItem>
  ) : (
    <StyledListItem onClick={onClick} {...rest}>
      {children}
    </StyledListItem>
  );
