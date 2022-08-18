import React, { PropsWithChildren } from 'react';
import { PlatformMenuButtonProps } from '../PlatformMenu/PlatformButton.styles';
import { PlatformButton } from '../PlatformMenu/PlatformButton';
import { PlatformMenu } from '../PlatformMenu';
import { StyledMenu } from './Menu.styles';
import { MenuItem } from './MenuItem';

interface MenuComposition extends PropsWithChildren<any> {
  Item: React.FC<PropsWithChildren<any>>;
  PlatformMenu: React.FC;
  PlatformButton: React.FC<PlatformMenuButtonProps>;
}

const Menu: React.FC & MenuComposition = ({ children }) => {
  return <StyledMenu>{children}</StyledMenu>;
};

Menu.Item = MenuItem;
Menu.PlatformMenu = PlatformMenu;
Menu.PlatformButton = PlatformButton;

export { Menu };
