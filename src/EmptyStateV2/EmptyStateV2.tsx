import { forwardRef } from 'react';
import {
  ActionWrapper,
  DescriptionWrapper,
  IconWrapper,
  StyledEmptyStateV2,
  TitleWrapper,
} from 'EmptyStateV2/EmptyStateV2.styles';

export interface EmptyStateV2Props {
  /** Optional icon displayed above the title. */
  icon?: React.ReactNode;
  /** Primary message. */
  title: string;
  /** Supporting text below the title. */
  description?: string;
  /** Call-to-action rendered below the description. */
  action?: React.ReactNode;
}

export const EmptyStateV2 = forwardRef<HTMLDivElement, EmptyStateV2Props>(
  ({ icon, title, description, action, ...rest }, ref) => (
    <StyledEmptyStateV2 ref={ref} {...rest}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <TitleWrapper>{title}</TitleWrapper>
      {description && <DescriptionWrapper>{description}</DescriptionWrapper>}
      {action && <ActionWrapper>{action}</ActionWrapper>}
    </StyledEmptyStateV2>
  ),
);

EmptyStateV2.displayName = 'EmptyStateV2';
