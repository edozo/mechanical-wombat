import React from 'react';
import { StyledTitle } from './Popover.styles';

export interface PopoverTitleProps {
  children?: React.ReactNode;
}

export const PopoverTitle: React.FC<PopoverTitleProps> = ({ children }) => <StyledTitle>{children}</StyledTitle>;
