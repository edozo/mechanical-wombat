import styled, { css } from 'styled-components';

export const StyledInputGroupV2 = styled.div<{ $border: boolean; $radius: 'standard' | 'round' }>`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral[50]};
  overflow: hidden;
  border: ${({ theme, $border }) => ($border ? `1px solid ${theme.colors.neutral[400]}` : 'none')};

  ${({ $radius }) =>
    $radius === 'standard' &&
    css`
      border-radius: ${({ theme }) => theme.borderRadius.md};
    `}

  ${({ $radius }) =>
    $radius === 'round' &&
    css`
      border-radius: ${({ theme }) => theme.borderRadius.round};
    `}

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.indigo[400]};
  }
`;

export const StyledInputV2 = styled.input<{ $inputSize: 'sm' | 'md' }>`
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  line-height: ${({ theme }) => theme.typography.scale.md.lineHeight};
  color: ${({ theme }) => theme.colors.neutral[900]};
  padding: ${({ theme }) => theme.spacing.sm};

  ${({ $inputSize }) =>
    $inputSize === 'md' &&
    css`
      padding: ${({ theme }) => theme.spacing.md};
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledTextareaV2 = styled.textarea<{ $inputSize: 'sm' | 'md' }>`
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  line-height: ${({ theme }) => theme.typography.scale.md.lineHeight};
  color: ${({ theme }) => theme.colors.neutral[900]};
  padding: ${({ theme }) => theme.spacing.sm};
  resize: vertical;

  ${({ $inputSize }) =>
    $inputSize === 'md' &&
    css`
      padding: ${({ theme }) => theme.spacing.md};
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledButtonV2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 0;
  background: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.neutral[400]};
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.neutral[300]};
  }
`;

export const StyledItemV2 = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ $backgroundColor, theme }) => $backgroundColor ?? theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[600]};
  white-space: nowrap;
`;
