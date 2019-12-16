import * as React from 'react';
import { StyledPopover, StyleProps } from './Popover.styles';

export interface Props extends StyleProps {
  children: React.ReactNode;
}

export const Popover = (props: Props): JSX.Element => <StyledPopover {...props}>{props.children}</StyledPopover>;
