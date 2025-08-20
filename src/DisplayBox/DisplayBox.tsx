import React from 'react';
import { StyledDisplayBox, StyledDisplayBoxColor, StyledDisplayBoxWrapper, StyleProps } from './DisplayBox.styles';

export interface DisplayBoxProps extends StyleProps {
  children?: React.ReactNode;
}

export const DisplayBox: React.FC<DisplayBoxProps> = props => (
  <StyledDisplayBox {...props}>
    <StyledDisplayBoxColor background={props.background} size={props.size} borderRadius={props.borderRadius} />
    {props.children}
  </StyledDisplayBox>
);

export const DisplayBoxWrapper: React.FC<DisplayBoxProps> = props => (
  <StyledDisplayBoxWrapper {...props}>{props.children}</StyledDisplayBoxWrapper>
);
