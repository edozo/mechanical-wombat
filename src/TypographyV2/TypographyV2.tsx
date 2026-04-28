import { forwardRef } from 'react';
import * as React from 'react';
import {
  StyledBody,
  StyledCaption,
  StyledDisplay,
  StyledHeadingLg,
  StyledHeadingMd,
  StyledHeadingSm,
  StyledLabel,
} from 'TypographyV2/TypographyV2.styles';

export interface DisplayProps {
  /** Overrides the rendered HTML element. Defaults to `h1`. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export interface HeadingLgProps {
  /** Overrides the rendered HTML element. Defaults to `h2`. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export interface HeadingMdProps {
  /** Overrides the rendered HTML element. Defaults to `h3`. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export interface HeadingSmProps {
  /** Overrides the rendered HTML element. Defaults to `h4`. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export interface BodyProps {
  /** Overrides the rendered HTML element. Defaults to `p`. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export interface LabelProps {
  /** Overrides the rendered HTML element. Defaults to `span`. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export interface CaptionProps {
  /** Overrides the rendered HTML element. Defaults to `span`. */
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const Display = forwardRef<HTMLElement, DisplayProps>((props, ref) => <StyledDisplay ref={ref} {...props} />);
Display.displayName = 'Display';

export const HeadingLg = forwardRef<HTMLElement, HeadingLgProps>((props, ref) => (
  <StyledHeadingLg ref={ref} {...props} />
));
HeadingLg.displayName = 'HeadingLg';

export const HeadingMd = forwardRef<HTMLElement, HeadingMdProps>((props, ref) => (
  <StyledHeadingMd ref={ref} {...props} />
));
HeadingMd.displayName = 'HeadingMd';

export const HeadingSm = forwardRef<HTMLElement, HeadingSmProps>((props, ref) => (
  <StyledHeadingSm ref={ref} {...props} />
));
HeadingSm.displayName = 'HeadingSm';

export const Body = forwardRef<HTMLElement, BodyProps>((props, ref) => <StyledBody ref={ref} {...props} />);
Body.displayName = 'Body';

export const Label = forwardRef<HTMLElement, LabelProps>((props, ref) => <StyledLabel ref={ref} {...props} />);
Label.displayName = 'Label';

export const Caption = forwardRef<HTMLElement, CaptionProps>((props, ref) => <StyledCaption ref={ref} {...props} />);
Caption.displayName = 'Caption';
