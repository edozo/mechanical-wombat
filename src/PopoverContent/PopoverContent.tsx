import React from 'react';
import { StyledPopoverContent, StyleProps } from './PopoverContent.styles';

export interface PopoverContentProps extends StyleProps {
  children?: React.ReactNode;
}

export const PopoverContent: React.FC<PopoverContentProps> = props => {
  const { children, ...rest } = props;
  return <StyledPopoverContent {...rest}>{children}</StyledPopoverContent>;
};
