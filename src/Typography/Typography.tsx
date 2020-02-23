import * as React from 'react';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledBody,
  StyledBodySmall,
  StyledLabel,
  StyledSmall,
} from './Typography.styles';

export const H1: React.FC = props => <StyledH1 {...props}>{props.children}</StyledH1>;
export const H2: React.FC = props => <StyledH2 {...props}>{props.children}</StyledH2>;
export const H3: React.FC = props => <StyledH3 {...props}>{props.children}</StyledH3>;
export const H4: React.FC = props => <StyledH4 {...props}>{props.children}</StyledH4>;
export const H5: React.FC = props => <StyledH5 {...props}>{props.children}</StyledH5>;
export const H6: React.FC = props => <StyledH6 {...props}>{props.children}</StyledH6>;

export const Body: React.FC = props => <StyledBody {...props}>{props.children}</StyledBody>;
export const BodySmall: React.FC = props => <StyledBodySmall {...props}>{props.children}</StyledBodySmall>;
export const Label: React.FC = props => <StyledLabel {...props}>{props.children}</StyledLabel>;
export const Small: React.FC = props => <StyledSmall {...props}>{props.children}</StyledSmall>;
