import { StyledSkeletonLine } from './SkeletonLine.styles';
import type { DefaultTheme } from 'styled-components';

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
