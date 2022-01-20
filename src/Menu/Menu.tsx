import React from 'react';
import { PlatformMenuButtonProps } from '../PlatformMenu/PlatformButton.styles';
import { PlatformButton } from '../PlatformMenu/PlatformButton';
import { PlatformMenu } from '../PlatformMenu';
import { StyledMenu } from './Menu.styles';
import { MenuItemProps, MenuItemWrapper } from './MenuItem';

interface MenuComposition {
  ItemWrapper: React.FC<MenuItemProps>;
  PlatformMenu: React.FC;
  PlatformButton: React.FC<PlatformMenuButtonProps>;
}

const Menu: React.FC & MenuComposition = ({ children }) => {
  return <StyledMenu>{children}</StyledMenu>;
};

Menu.ItemWrapper = MenuItemWrapper;
Menu.PlatformMenu = PlatformMenu;
Menu.PlatformButton = PlatformButton;

export { Menu };
