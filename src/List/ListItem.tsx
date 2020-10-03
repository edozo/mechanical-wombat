import React from 'react';
import { StyledListItem, StyleProps } from './ListItem.styles';

export const ListItem: React.FC<StyleProps> = props => {
  const { disabled, children, onClick, ...rest } = props;

  return props.disabled ? (
    <StyledListItem disabled={disabled} {...rest}>
      {children}
    </StyledListItem>
  ) : (
    <StyledListItem onClick={onClick} {...rest}>
      {children}
    </StyledListItem>
  );
};
