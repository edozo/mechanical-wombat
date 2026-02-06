import styled, { keyframes } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

export const StyledSkeletonLine = styled.div<{
  $width?: string;
  $height?: string;
  $radius?: keyof DefaultTheme['borderRadius'];
  $color?: 'white' | 'grey';
}>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '12px'};
  border-radius: ${({ theme, $radius }) => theme.borderRadius[$radius || 'standard']};
  background: linear-gradient(
    90deg,
    ${({ $color, theme }) => ($color === 'white' ? theme.colors.white : theme.colors.grayLight)} 25%,
    ${({ $color, theme }) => ($color === 'white' ? theme.colors.grayLight : theme.colors.grayLighter)} 37%,
    ${({ $color, theme }) => ($color === 'white' ? theme.colors.white : theme.colors.grayLight)} 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 2s ease-in-out infinite;
`;
