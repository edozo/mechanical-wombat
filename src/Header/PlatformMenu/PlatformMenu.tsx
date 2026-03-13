import React from 'react';
import { StyledPlatformMenu } from './PlatformMenu.styles';

export interface PlatformMenuProps {
  children?: React.ReactNode;
}

export const PlatformMenu: React.FC<PlatformMenuProps> = ({ children }) => (
  <StyledPlatformMenu>{children}</StyledPlatformMenu>
);
