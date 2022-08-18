import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { useHeaderContext } from '../Header';
import { StyledMenuItem } from './MenuItem.styles';

export const MenuItem: React.FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children }) => {
  const { appName } = useHeaderContext();

  return <StyledMenuItem appName={appName}>{children}</StyledMenuItem>;
};
