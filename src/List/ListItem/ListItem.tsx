import React from 'react';
import { useListContext } from '../ListGroup';
import { StyledListItem, ListItemProps } from './ListItem.styles';

export const ListItem: React.FC<ListItemProps> = ({ children, onClick, ...rest }) => {
  const { disabled, variant } = useListContext();
  return disabled ? (
    <StyledListItem disabled={disabled} variant={variant} {...rest}>
      {children}
    </StyledListItem>
  ) : (
    <StyledListItem onClick={onClick} variant={variant} {...rest}>
      {children}
    </StyledListItem>
  );
};
