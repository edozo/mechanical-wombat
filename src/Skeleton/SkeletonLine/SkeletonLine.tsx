import type { DefaultTheme } from 'styled-components';
import { StyledSkeletonLine } from './SkeletonLine.styles';

export const SkeletonLine = ({
  width,
  height,
  radius,
  color,
}: {
  width?: string;
  height?: string;
  radius?: keyof DefaultTheme['borderRadius'];
  color?: 'white' | 'grey';
}) => <StyledSkeletonLine $width={width} $height={height} $radius={radius} $color={color} />;
