import React, { HTMLAttributes } from 'react';
import { StyledMenuItemWrapper } from './MenuItem.styles';

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'Maps' | 'Occupiers' | 'Insight' | 'Help centre';
}

export const MenuItemWrapper: React.FC<MenuItemProps> = ({ children, variant }) => {
  return <StyledMenuItemWrapper variant={variant}>{children}</StyledMenuItemWrapper>;
};
