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

/**
 * @deprecated Use `Display` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `Display` uses semibold (600) rather than bold (700), and a negative letter-spacing.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const H1: React.FC<Props> = (props) => <StyledH1 {...props}>{props.children}</StyledH1>;

/**
 * @deprecated Use `HeadingLg` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `HeadingLg` uses a negative letter-spacing instead of a positive one.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const H2: React.FC<Props> = (props) => <StyledH2 {...props}>{props.children}</StyledH2>;

/**
 * @deprecated Use `HeadingMd` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `HeadingMd` uses semibold (600) rather than bold (700), and a negative letter-spacing.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const H3: React.FC<Props> = (props) => <StyledH3 {...props}>{props.children}</StyledH3>;

/**
 * @deprecated Use `HeadingSm` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `HeadingSm` uses zero letter-spacing instead of a positive one.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const H4: React.FC<Props> = (props) => <StyledH4 {...props}>{props.children}</StyledH4>;

/**
 * @deprecated Use `Body` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `Body` uses regular (400) rather than semibold (600).
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const H5: React.FC<Props> = (props) => <StyledH5 {...props}>{props.children}</StyledH5>;

/**
 * @deprecated Use `Caption` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `Caption` does not apply `text-transform: uppercase`.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const H6: React.FC<Props> = (props) => <StyledH6 {...props}>{props.children}</StyledH6>;

/**
 * @deprecated Use `HeadingSm` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `HeadingSm` uses semibold (600) rather than regular (400).
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const TextXLarge: React.FC<Props> = (props) => <StyledTextXLarge {...props}>{props.children}</StyledTextXLarge>;

/**
 * @deprecated Use `Body` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `Body` is 1rem (16px) rather than 1.125rem (18px).
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const TextLarge: React.FC<Props> = (props) => <StyledTextLarge {...props}>{props.children}</StyledTextLarge>;

/**
 * @deprecated Use `Body` from `TypographyV2` instead.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const TextBase: React.FC<Props> = (props) => <StyledTextBase {...props}>{props.children}</StyledTextBase>;

/**
 * @deprecated Use `Label` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `Label` uses medium (500) rather than regular (400).
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const TextSmall: React.FC<Props> = (props) => <StyledTextSmall {...props}>{props.children}</StyledTextSmall>;

/**
 * @deprecated Use `Caption` from `TypographyV2` instead.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const TextXSmall: React.FC<Props> = (props) => <StyledTextXSmall {...props}>{props.children}</StyledTextXSmall>;

/**
 * @deprecated Use `Caption` from `TypographyV2` instead.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const TextXXSmall: React.FC<Props> = (props) => (
  <StyledTextXXSmall {...props}>{props.children}</StyledTextXXSmall>
);

/**
 * @deprecated Use `HeadingSm` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `HeadingSm` uses the Inter font rather than Poppins, and is 1.25rem rather than 1rem.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const Title: React.FC<Props> = (props) => <StyledTitle {...props}>{props.children}</StyledTitle>;

/**
 * @deprecated Use `Label` from `TypographyV2` instead.
 *
 * @remarks
 * Note: `Label` uses the Inter font rather than Poppins.
 *
 * Removal: Will remain available until all apps are migrated (no planned removal date yet).
 */
export const SubTitle: React.FC<Props> = (props) => <StyledSubTitle {...props}>{props.children}</StyledSubTitle>;
