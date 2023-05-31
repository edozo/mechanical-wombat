import React from 'react';
import { useHeaderContext } from '../Header';
import { StyledMenuItem } from './MenuItem.styles';

export interface MenuItemProps {
  children: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  const { appName } = useHeaderContext();

  return <StyledMenuItem appName={appName}>{children}</StyledMenuItem>;
};
