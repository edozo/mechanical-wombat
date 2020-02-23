import React from 'react';
import { StyledDisplayBox, StyledDisplayBoxColor, StyledDisplayBoxWrapper, StyleProps } from './DisplayBox.styles';

export const DisplayBox: React.FC = (props: StyleProps) => (
  <StyledDisplayBox {...props}>
    <StyledDisplayBoxColor bg={props.bg} size={props.size} radius={props.radius} />
    {props.children}
  </StyledDisplayBox>
);

export const DisplayBoxWrapper: React.FC = props => (
  <StyledDisplayBoxWrapper {...props}>{props.children}</StyledDisplayBoxWrapper>
);
