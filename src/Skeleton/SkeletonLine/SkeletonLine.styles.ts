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
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '12px'};
  border-radius: ${props => props.theme.borderRadius[props.$radius || 'standard']};
  background: linear-gradient(
    90deg,
    ${props => (props.$color === 'white' ? props.theme.colors.white : props.theme.colors.grayLight)} 25%,
    ${props => (props.$color === 'white' ? props.theme.colors.grayLight : props.theme.colors.grayLighter)} 37%,
    ${props => (props.$color === 'white' ? props.theme.colors.white : props.theme.colors.grayLight)} 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 2s ease-in-out infinite;
`;
