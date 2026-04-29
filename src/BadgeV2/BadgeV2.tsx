import { forwardRef } from 'react';
import { StyledBadgeV2 } from 'BadgeV2/BadgeV2.styles';

export type BadgeV2Variant = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'primary';
export type BadgeV2Size = 'sm' | 'md' | 'lg';
export type BadgeV2Appearance = 'subtle' | 'solid';

export interface BadgeV2Props {
  /** Semantic colour variant. */
  variant?: BadgeV2Variant;
  /** Size scale for text and padding. */
  size?: BadgeV2Size;
  /** Visual style: subtle uses a light tinted background; solid uses a dark filled background with light text. */
  appearance?: BadgeV2Appearance;
  /** Badge content. */
  children: React.ReactNode;
}

export const BadgeV2 = forwardRef<HTMLSpanElement, BadgeV2Props>(
  ({ variant = 'neutral', size = 'md', appearance = 'subtle', children, ...rest }, ref) => (
    <StyledBadgeV2 ref={ref} $variant={variant} $size={size} $appearance={appearance} {...rest}>
      {children}
    </StyledBadgeV2>
  ),
);

BadgeV2.displayName = 'BadgeV2';
