import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { DropDownV2Size } from 'DropDownV2/DropDownV2';

export const StyledSelectTrigger = styled(Select.Trigger)<{ $size: DropDownV2Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral[50]};
  color: ${({ theme }) => theme.colors.neutral[900]};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  transition: border-color 150ms ease;

  padding: ${({ theme, $size }) =>
    $size === 'sm' ? `${theme.spacing.xs} ${theme.spacing.sm}` : `${theme.spacing.sm} ${theme.spacing.md}`};

  &[data-disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.indigo[400]};
    outline-offset: 0;
    border-color: transparent;
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.neutral[600]};
  }

  &[data-placeholder] {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }
`;

export const StyledSelectValue = styled(Select.Value)`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const TriggerItemWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledSelectIcon = styled(Select.Icon)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral[500]};
  flex-shrink: 0;
`;

export const StyledSelectContent = styled(Select.Content)`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  overflow: hidden;
  z-index: 50;
  min-width: var(--radix-select-trigger-width);
`;

export const StyledSelectViewport = styled(Select.Viewport)`
  padding: ${({ theme }) => theme.spacing.xs};
`;

export const StyledSelectItem = styled(Select.Item)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  color: ${({ theme }) => theme.colors.neutral[900]};
  cursor: pointer;
  user-select: none;
  outline: none;

  &[data-highlighted] {
    background: ${({ theme }) => theme.colors.indigo[50]};
    color: ${({ theme }) => theme.colors.indigo[700]};
  }

  &[data-state='checked'] {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.indigo[700]};
  }

  &[data-disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.neutral[400]};
  }
`;

export const ItemThumbnail = styled.img`
  width: 32px;
  height: 24px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  flex-shrink: 0;
`;
