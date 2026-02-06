// TODO: Finalize this once talked to Silvia about design system
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import { TextXXSmall } from '../Typography';

export interface StylePopoverProps {
  radius: 'xsmall' | 'small' | 'standard' | 'large' | 'xlarge';
}

export const StyledPopover = styled(Tippy)<StylePopoverProps>`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grayDarker};
  box-shadow: ${({ theme }) => theme.boxShadow.standard};
  border-radius: ${({ theme, radius }) => theme.borderRadius[radius || 'standard']};

  .tippy-content {
    padding: 0;
    border-radius: inherit;
    > div {
      border-radius: inherit;
    }
  }

  .tippy-arrow {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledTitle = styled(TextXXSmall)`
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grayLighter};
  border: 1px solid ${({ theme }) => theme.colors.grayLighter};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.text.xxsmall};
  &:hover {
    background-color: ${({ theme }) => theme.colors.steelBlueLighter};
    border-color: ${({ theme }) => theme.colors.steelBlueDark};
    color: ${({ theme }) => theme.colors.aliases.primary};
    svg {
      fill: ${({ theme }) => theme.colors.aliases.primary};
    }
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.steelBlueDark};
  }
`;
