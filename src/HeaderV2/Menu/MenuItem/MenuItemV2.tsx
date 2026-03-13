import React, { PropsWithChildren } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { StyledMenuItemV2 } from 'HeaderV2/Menu/MenuItem/MenuItemV2.styles';
import { StyledNavItem } from 'HeaderV2/Menu/MenuV2.styles';

export const MenuItemV2: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledNavItem>
    <StyledMenuItemV2>
      <NavigationMenu.Link asChild>{children}</NavigationMenu.Link>
    </StyledMenuItemV2>
  </StyledNavItem>
);
