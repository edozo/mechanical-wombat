import styled, { css } from 'styled-components';
import * as Switch from '@radix-ui/react-switch';
import { SwitchV2Size } from 'SwitchV2/SwitchV2';

const rootSize = {
  sm: css`
    width: 36px;
    height: 20px;
  `,
  md: css`
    width: 44px;
    height: 24px;
  `,
};

const thumbSize = {
  sm: css`
    width: 16px;
    height: 16px;

    &[data-state='checked'] {
      transform: translateX(16px);
    }
  `,
  md: css`
    width: 20px;
    height: 20px;

    &[data-state='checked'] {
      transform: translateX(20px);
    }
  `,
};

export const StyledSwitchRoot = styled(Switch.Root)<{ $size: SwitchV2Size }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.neutral[400]};
  cursor: pointer;
  padding: 2px;
  transition: background-color 200ms ease;

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.indigo[600]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.indigo[400]};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ $size }) => rootSize[$size]}
`;

export const StyledSwitchThumb = styled(Switch.Thumb)<{ $size: SwitchV2Size }>`
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  transition: transform 200ms ease;

  &[data-state='unchecked'] {
    transform: translateX(0);
  }

  ${({ $size }) => thumbSize[$size]}
`;
