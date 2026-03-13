import React from 'react';
import type { DefaultTheme } from 'styled-components';
import { StyledSkeletonLine } from './SkeletonLine.styles';

export interface SkeletonLineProps {
  /** Width of the skeleton line (CSS value, e.g. '100%', '200px'). */
  width?: string;
  /** Height of the skeleton line (CSS value). */
  height?: string;
  /** Border radius token from the theme. */
  radius?: keyof DefaultTheme['borderRadius'];
  /** Colour variant — defaults to grey. */
  color?: 'white' | 'grey';
}

export const SkeletonLine: React.FC<SkeletonLineProps> = ({ width, height, radius, color }) => (
  <StyledSkeletonLine $width={width} $height={height} $radius={radius} $color={color} />
);
