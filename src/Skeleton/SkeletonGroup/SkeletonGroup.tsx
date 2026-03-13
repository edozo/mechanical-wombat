import React from 'react';
import type { DefaultTheme } from 'styled-components';
import { StyledSkeletonGroup } from './SkeletonGroup.styles';

export interface SkeletonGroupProps {
  /** Child skeleton elements to group together. */
  children?: React.ReactNode;
  /** Gap between skeleton items using a theme spacing token. */
  gap?: keyof DefaultTheme['spacing'];
}

export const SkeletonGroup: React.FC<SkeletonGroupProps> = ({ children, gap }) => (
  <StyledSkeletonGroup $gap={gap}>{children}</StyledSkeletonGroup>
);
