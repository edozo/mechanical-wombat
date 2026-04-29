import { forwardRef } from 'react';
import type { DefaultTheme } from 'styled-components';
import { StyledSkeletonV2Group, StyledSkeletonV2Line } from 'SkeletonV2/SkeletonV2.styles';

export type SkeletonV2Color = 'default' | 'light';

export interface SkeletonV2LineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width of the skeleton line (any CSS length value). */
  width?: string;
  /** Height of the skeleton line (any CSS length value). */
  height?: string;
  /** Border radius token from the theme. */
  radius?: keyof DefaultTheme['borderRadius'];
  /** Shimmer colour scheme — use 'light' on dark or coloured backgrounds. */
  color?: SkeletonV2Color;
}

export interface SkeletonV2GroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gap between skeleton lines using a theme spacing token. */
  gap?: keyof DefaultTheme['spacing'];
  /** Child skeleton elements. */
  children: React.ReactNode;
}

export interface SkeletonV2Props {
  /** SkeletonV2.Line and SkeletonV2.Group elements. */
  children: React.ReactNode;
}

const SkeletonV2Line = forwardRef<HTMLDivElement, SkeletonV2LineProps>(
  ({ width, height, radius = 'md', color = 'default', ...rest }, ref) => (
    <StyledSkeletonV2Line ref={ref} $width={width} $height={height} $radius={radius} $color={color} {...rest} />
  ),
);
SkeletonV2Line.displayName = 'SkeletonV2.Line';

const SkeletonV2Group = forwardRef<HTMLDivElement, SkeletonV2GroupProps>(({ gap = 'xs', children, ...rest }, ref) => (
  <StyledSkeletonV2Group ref={ref} $gap={gap} {...rest}>
    {children}
  </StyledSkeletonV2Group>
));
SkeletonV2Group.displayName = 'SkeletonV2.Group';

// eslint-disable-next-line react/jsx-no-useless-fragment -- root is a zero-DOM-node grouping wrapper
const SkeletonV2Root = ({ children }: SkeletonV2Props) => <>{children}</>;
SkeletonV2Root.displayName = 'SkeletonV2';

export const SkeletonV2 = Object.assign(SkeletonV2Root, {
  Line: SkeletonV2Line,
  Group: SkeletonV2Group,
});
