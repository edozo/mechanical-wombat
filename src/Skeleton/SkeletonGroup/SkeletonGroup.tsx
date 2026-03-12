import { PropsWithChildren } from 'react';
import type { DefaultTheme } from 'styled-components';
import { StyledSkeletonGroup } from './SkeletonGroup.styles';

export const SkeletonGroup = ({ children, gap }: PropsWithChildren<{ gap?: keyof DefaultTheme['spacing'] }>) => (
  <StyledSkeletonGroup $gap={gap}>{children}</StyledSkeletonGroup>
);
