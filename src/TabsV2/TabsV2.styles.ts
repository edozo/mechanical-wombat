import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import { TabsV2Appearance } from 'TabsV2/TabsV2';

export const StyledTabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
`;

/* ─── List ─────────────────────────────────────────────────────────────────── */

const listAppearance: Record<TabsV2Appearance, ReturnType<typeof css>> = {
  underline: css`
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  `,
  pill: css`
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.xs};
    background: ${({ theme }) => theme.colors.neutral[100]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  `,
  boxed: css`
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[300]};
    gap: ${({ theme }) => theme.spacing.xs};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  `,
  subtle: css`
    gap: ${({ theme }) => theme.spacing.xs};
  `,
};

export const StyledTabsList = styled(Tabs.List)<{ $stretch?: boolean; $appearance: TabsV2Appearance }>`
  display: flex;

  ${({ $stretch }) =>
    $stretch &&
    css`
      > button {
        flex: 1;
        justify-content: center;
      }
    `}

  ${({ $appearance }) => listAppearance[$appearance]}
`;

/* ─── Trigger ───────────────────────────────────────────────────────────────── */

const triggerAppearance: Record<TabsV2Appearance, ReturnType<typeof css>> = {
  underline: css`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-bottom: 2px solid transparent;
    color: ${({ theme }) => theme.colors.neutral[500]};
    margin-bottom: -1px;
    border-radius: 0;

    &[data-state='active'] {
      color: ${({ theme }) => theme.colors.neutral[900]};
      border-bottom-color: ${({ theme }) => theme.colors.indigo[600]};
    }

    &:hover:not([data-disabled]):not([data-state='active']) {
      color: ${({ theme }) => theme.colors.neutral[700]};
    }
  `,
  pill: css`
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.neutral[600]};

    &[data-state='active'] {
      background: ${({ theme }) => theme.colors.neutral[50]};
      color: ${({ theme }) => theme.colors.neutral[900]};
      box-shadow: ${({ theme }) => theme.boxShadow.sm};
    }

    &:hover:not([data-disabled]):not([data-state='active']) {
      background: ${({ theme }) => theme.colors.neutral[200]};
      color: ${({ theme }) => theme.colors.neutral[900]};
    }
  `,
  boxed: css`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid transparent;
    border-bottom: none;
    border-radius: ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0 0;
    color: ${({ theme }) => theme.colors.neutral[500]};
    margin-bottom: -1px;

    &[data-state='active'] {
      background: ${({ theme }) => theme.colors.neutral[50]};
      border-color: ${({ theme }) => theme.colors.neutral[300]};
      border-bottom-color: ${({ theme }) => theme.colors.neutral[50]};
      color: ${({ theme }) => theme.colors.neutral[900]};
    }

    &:hover:not([data-disabled]):not([data-state='active']) {
      color: ${({ theme }) => theme.colors.neutral[700]};
      background: ${({ theme }) => theme.colors.neutral[100]};
    }
  `,
  subtle: css`
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.neutral[500]};

    &[data-state='active'] {
      background: ${({ theme }) => theme.colors.neutral[200]};
      color: ${({ theme }) => theme.colors.neutral[900]};
    }

    &:hover:not([data-disabled]):not([data-state='active']) {
      background: ${({ theme }) => theme.colors.neutral[100]};
      color: ${({ theme }) => theme.colors.neutral[700]};
    }
  `,
};

export const StyledTabsTrigger = styled(Tabs.Trigger)<{ $appearance: TabsV2Appearance }>`
  display: inline-flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;
  transition:
    color 150ms ease,
    background-color 150ms ease,
    border-color 150ms ease,
    box-shadow 150ms ease;

  &[data-disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.neutral[300]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.indigo[400]};
    outline-offset: -2px;
  }

  ${({ $appearance }) => triggerAppearance[$appearance]}
`;

/* ─── Content ───────────────────────────────────────────────────────────────── */

export const StyledTabsContent = styled(Tabs.Content)`
  padding: ${({ theme }) => theme.spacing.md};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.indigo[400]};
    outline-offset: -2px;
  }
`;
