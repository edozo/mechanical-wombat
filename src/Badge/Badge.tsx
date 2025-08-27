import * as React from 'react';
import { StyledBadge } from './Badge.styles';

interface BadgeProps {
  /**
   * The background colour
   */
  background?: string;
  /**
   * The text colour
   */
  color?: string;
  /**
   * The size of the badge
   */
  size?: 'xxsmall' | 'small' | 'standard';
  /**
   * The children of the badge
   */
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  background = 'grayLight',
  color = 'grayDarker',
  size = 'standard',
  children,
  ...props
}) => (
  <StyledBadge $background={background} $color={color} $size={size} {...props}>
    {children}
  </StyledBadge>
);
