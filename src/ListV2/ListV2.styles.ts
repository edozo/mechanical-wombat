import styled, { css } from 'styled-components';
import { ListV2Variant } from 'ListV2/ListV2';

export const StyledListV2 = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: inherit;
`;

const itemInteractiveStyles = {
  standard: css`
    &:hover:not([aria-disabled='true']) {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
    }
    &:active:not([aria-disabled='true']) {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
    }
  `,
  platform: css`
    &:hover:not([aria-disabled='true']) {
      background-color: ${({ theme }) => theme.colors.slate[100]};
    }
    &:active:not([aria-disabled='true']) {
      background-color: ${({ theme }) => theme.colors.slate[200]};
    }
  `,
};

export const StyledListV2Item = styled.div<{ $variant: ListV2Variant; $disabled: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  border-radius: inherit;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  }

  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.colors.neutral[400]};
      outline: none;
    `}

  ${({ $variant, $disabled }) => !$disabled && itemInteractiveStyles[$variant]}
`;
