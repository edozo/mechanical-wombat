import React from 'react';
import { PlatformMenuButtonProps, StylePlatformButton } from './PlatformButton.styles';

export const PlatformButton: React.FC<PlatformMenuButtonProps> = ({ children, onClick, ...rest }) => (
  <StylePlatformButton onClick={onClick} {...rest} type="button">
    {children}
  </StylePlatformButton>
);
