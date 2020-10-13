import * as React from 'react';
import { StyledBadge } from './Badge.styles';

export interface BadgeProps {
  /**
   * The background colour
   */
  background?: string;
  /**
   * The text colour
   */
  color?: string;
  /**
   * TODO: fill this out more once design system has caught-up
   */
  size?: 'standard';
}

export const Badge: React.FC<BadgeProps> = ({
  background = 'grayLight',
  color = 'grayDarker',
  size = 'standard',
  children,
  ...props
}) => (
  <StyledBadge style={{ border: '3px dotted green' }} background={background} color={color} size={size} {...props}>
    {children}
  </StyledBadge>
);
