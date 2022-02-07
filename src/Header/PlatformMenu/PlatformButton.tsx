import React from 'react';
import { PlatformMenuButtonProps, StylePlatformButton } from './PlatformButton.styles';

export const PlatformButton: React.FC<PlatformMenuButtonProps> = ({ children, onClick, ...rest }) => (
  <StylePlatformButton
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9, rotate: -90 }}
    onClick={onClick}
    {...rest}
    type="button"
  >
    {children}
  </StylePlatformButton>
);
