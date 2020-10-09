import React from 'react';
import { StyledPopoverContent, StyleProps } from './PopoverContent.styles';

export const PopoverContent: React.FC<StyleProps> = props => {
  const { children, ...rest } = props;
  return <StyledPopoverContent {...rest}>{children}</StyledPopoverContent>;
};
