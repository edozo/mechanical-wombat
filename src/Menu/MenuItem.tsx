import React from 'react';
import { StyledMenuItemWrapper } from './MenuItem.styles';

export const MenuItemWrapper: React.FC = ({ children }) => {
  return <StyledMenuItemWrapper>{children}</StyledMenuItemWrapper>;
};
