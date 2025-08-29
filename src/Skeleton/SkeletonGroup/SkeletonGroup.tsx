import { PropsWithChildren } from 'react';
import { StyledSkeletonGroup } from './SkeletonGroup.styles';
import type { DefaultTheme } from 'styled-components';

export const SkeletonGroup = ({ children, gap }: PropsWithChildren<{ gap?: keyof DefaultTheme['spacing'] }>) => (
  <StyledSkeletonGroup $gap={gap}>{children}</StyledSkeletonGroup>
);
