import React, { PropsWithChildren } from 'react';
import { StyledTitle } from './Popover.styles';

export const PopoverTitle: React.FC<PropsWithChildren<any>> = ({ children }) => <StyledTitle>{children}</StyledTitle>;
