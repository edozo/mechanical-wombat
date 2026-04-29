import styled, { keyframes } from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { SkeletonV2Color } from 'SkeletonV2/SkeletonV2';

const shimmer = keyframes`
  0%   { background-position: 100% 0; }
  100% { background-position: -100% 0; }
`;

export const StyledSkeletonV2Line = styled.div<{
  $width?: string;
  $height?: string;
  $radius: keyof DefaultTheme['borderRadius'];
  $color: SkeletonV2Color;
}>`
  width: ${({ $width }) => $width ?? '100%'};
  height: ${({ $height }) => $height ?? '12px'};
  border-radius: ${({ theme, $radius }) => theme.borderRadius[$radius]};
  background: linear-gradient(
    90deg,
    ${({ theme, $color }) => ($color === 'light' ? theme.colors.neutral[100] : theme.colors.neutral[200])} 25%,
    ${({ theme, $color }) => ($color === 'light' ? theme.colors.neutral[50] : theme.colors.neutral[100])} 37%,
    ${({ theme, $color }) => ($color === 'light' ? theme.colors.neutral[100] : theme.colors.neutral[200])} 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 2s ease-in-out infinite;
`;

export const StyledSkeletonV2Group = styled.div<{
  $gap: keyof DefaultTheme['spacing'];
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $gap }) => theme.spacing[$gap]};
`;
