import React, { HTMLAttributes } from 'react';
import { StyledMenuItemWrapper } from './MenuItem.styles';

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  appName?: 'maps' | 'occupiers' | 'insight';
}

export const MenuItemWrapper: React.FC<MenuItemProps> = ({ children, appName }) => {
  return <StyledMenuItemWrapper appName={appName}>{children}</StyledMenuItemWrapper>;
};
