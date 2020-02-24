import React from 'react';
import { StyledDisplayBox, StyledDisplayBoxColor, StyledDisplayBoxWrapper, StyleProps } from './DisplayBox.styles';

export const DisplayBox: React.FC = (props: StyleProps) => (
  <StyledDisplayBox {...props}>
    <StyledDisplayBoxColor background={props.background} size={props.size} borderRadius={props.borderRadius} />
    {props.children}
  </StyledDisplayBox>
);

export const DisplayBoxWrapper: React.FC = props => (
  <StyledDisplayBoxWrapper {...props}>{props.children}</StyledDisplayBoxWrapper>
);
