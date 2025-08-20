import React from 'react';
import { PlatformMenuButtonProps } from '../PlatformMenu/PlatformButton.styles';
import { PlatformButton } from '../PlatformMenu/PlatformButton';
import { PlatformMenu } from '../PlatformMenu';
import { StyledMenu } from './Menu.styles';
import { MenuItem, MenuItemProps } from './MenuItem';

interface MenuComposition {
  Item: React.FC<MenuItemProps>;
  PlatformMenu: React.FC<React.PropsWithChildren<unknown>>;
  PlatformButton: React.FC<PlatformMenuButtonProps>;
}

interface Props {
  children: React.ReactNode;
}

const Menu: React.FC<Props> & MenuComposition = ({ children }) => {
  return <StyledMenu>{children}</StyledMenu>;
};

Menu.Item = MenuItem;
Menu.PlatformMenu = PlatformMenu as React.FC<React.PropsWithChildren<unknown>>;
Menu.PlatformButton = PlatformButton;

export { Menu };
