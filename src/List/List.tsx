import * as React from 'react';
import { StyledList, StyleProps } from './List.styles';

export const List: React.FC<StyleProps> = props => <StyledList {...props}>{props.children}</StyledList>;
