import * as React from 'react';
import { StyledPopoverContent, StyleProps } from './PopoverContent.styles';

export interface Props extends StyleProps {
  children: React.ReactNode;
}

export const PopoverContent = (props: Props): JSX.Element => (
  <StyledPopoverContent {...props}>{props.children}</StyledPopoverContent>
);
