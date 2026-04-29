import styled from 'styled-components';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ToggleGroupV2Size } from 'ToggleGroupV2/ToggleGroupV2';

export const StyledToggleGroupRoot = styled(ToggleGroup.Root)`
  display: inline-flex;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral[200]};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  gap: 1px;
  overflow: hidden;
`;

export const StyledToggleGroupItem = styled(ToggleGroup.Item)<{ $size: ToggleGroupV2Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ theme }) => theme.colors.neutral[50]};
  color: ${({ theme }) => theme.colors.neutral[700]};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition:
    background-color 150ms ease,
    color 150ms ease;

  font-size: ${({ theme, $size }) =>
    $size === 'sm' ? theme.typography.scale.sm.size : theme.typography.scale.md.size};
  padding: ${({ theme, $size }) =>
    $size === 'sm' ? `${theme.spacing.xs} ${theme.spacing.sm}` : `${theme.spacing.sm} ${theme.spacing.md}`};

  &:first-child {
    border-radius: ${({ theme }) => theme.borderRadius.md} 0 0 ${({ theme }) => theme.borderRadius.md};
  }

  &:last-child {
    border-radius: 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.neutral[300]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.indigo[400]};
    outline-offset: -2px;
    z-index: 1;
  }

  &[data-state='on'] {
    background: ${({ theme }) => theme.colors.indigo[100]};
    color: ${({ theme }) => theme.colors.indigo[700]};
  }

  &:hover:not([data-state='on']):not(:disabled) {
    background: ${({ theme }) => theme.colors.indigo[50]};
    color: ${({ theme }) => theme.colors.indigo[600]};
  }
`;
