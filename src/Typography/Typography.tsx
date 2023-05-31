import * as React from 'react';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledTextXLarge,
  StyledTextLarge,
  StyledTextBase,
  StyledTextSmall,
  StyledTextXSmall,
  StyledTextXXSmall,
  StyledTitle,
  StyledSubTitle,
} from './Typography.styles';

export interface Props {
  children: React.ReactNode;
}

export const H1: React.FC<Props> = props => <StyledH1 {...props}>{props.children}</StyledH1>;
export const H2: React.FC<Props> = props => <StyledH2 {...props}>{props.children}</StyledH2>;
export const H3: React.FC<Props> = props => <StyledH3 {...props}>{props.children}</StyledH3>;
export const H4: React.FC<Props> = props => <StyledH4 {...props}>{props.children}</StyledH4>;
export const H5: React.FC<Props> = props => <StyledH5 {...props}>{props.children}</StyledH5>;
export const H6: React.FC<Props> = props => <StyledH6 {...props}>{props.children}</StyledH6>;

export const TextXLarge: React.FC<Props> = props => <StyledTextXLarge {...props}>{props.children}</StyledTextXLarge>;
export const TextLarge: React.FC<Props> = props => <StyledTextLarge {...props}>{props.children}</StyledTextLarge>;
export const TextBase: React.FC<Props> = props => <StyledTextBase {...props}>{props.children}</StyledTextBase>;
export const TextSmall: React.FC<Props> = props => <StyledTextSmall {...props}>{props.children}</StyledTextSmall>;
export const TextXSmall: React.FC<Props> = props => <StyledTextXSmall {...props}>{props.children}</StyledTextXSmall>;
export const TextXXSmall: React.FC<Props> = props => <StyledTextXXSmall {...props}>{props.children}</StyledTextXXSmall>;

export const Title: React.FC<Props> = props => <StyledTitle {...props}>{props.children}</StyledTitle>;
export const SubTitle: React.FC<Props> = props => <StyledSubTitle {...props}>{props.children}</StyledSubTitle>;
