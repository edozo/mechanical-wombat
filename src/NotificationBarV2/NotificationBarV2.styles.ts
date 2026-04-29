import styled, { css } from 'styled-components';
import * as Collapsible from '@radix-ui/react-collapsible';
import { NotificationBarV2Variant } from 'NotificationBarV2/NotificationBarV2';

const variantTokens = {
  info: css`
    background-color: ${({ theme }) => theme.colors.blue[50]};
    color: ${({ theme }) => theme.colors.blue[700]};
    border-color: ${({ theme }) => theme.colors.blue[200]};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.teal[50]};
    color: ${({ theme }) => theme.colors.teal[700]};
    border-color: ${({ theme }) => theme.colors.teal[200]};
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.status.warning[50]};
    color: ${({ theme }) => theme.colors.status.warning[700]};
    border-color: ${({ theme }) => theme.colors.status.warning[200]};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.status.danger[50]};
    color: ${({ theme }) => theme.colors.status.danger[700]};
    border-color: ${({ theme }) => theme.colors.status.danger[200]};
  `,
};

export const StyledNotificationBarV2 = styled.div<{ $variant: NotificationBarV2Variant; $square: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid;
  border-radius: ${({ theme, $square }) => ($square ? '0' : theme.borderRadius.md)};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};

  ${({ $variant }) => variantTokens[$variant]}
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

export const DismissButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const StyledAccordionRoot = styled(Collapsible.Root)<{ $variant: NotificationBarV2Variant; $square: boolean }>`
  border: 1px solid;
  border-radius: ${({ theme, $square }) => ($square ? '0' : theme.borderRadius.md)};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};

  ${({ $variant }) => variantTokens[$variant]}
`;

export const AccordionSummaryRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;

export const AccordionSummary = styled.div`
  flex: 1;
  min-width: 0;
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
`;

export const AccordionTrigger = styled(Collapsible.Trigger)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: underline;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const AccordionChevron = styled.span<{ $open: boolean }>`
  display: flex;
  align-items: center;
  transition: transform 200ms ease;

  ${({ $open }) =>
    $open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const AccordionContent = styled(Collapsible.Content)`
  padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
`;
