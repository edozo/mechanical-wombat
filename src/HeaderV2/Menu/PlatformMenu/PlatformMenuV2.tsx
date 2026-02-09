import React, { PropsWithChildren } from 'react';
import { StyledPlatformMenuV2 } from 'HeaderV2/Menu/PlatformMenu/PlatformMenuV2.styles';

export const PlatformMenuV2: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledPlatformMenuV2>{children}</StyledPlatformMenuV2>
);
