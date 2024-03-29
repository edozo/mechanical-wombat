import React from 'react';
import { useListContext } from '../ListContext';
import { StyledListItem, ListItemProps } from './ListItem.styles';

export const ListItem: React.FC<ListItemProps> = ({ disabled, children, onClick, ...rest }) => {
  const { variant } = useListContext();

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
