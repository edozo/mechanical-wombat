import styled, { keyframes } from 'styled-components';
import * as Tooltip from '@radix-ui/react-tooltip';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(0.96); }
`;

export const StyledTooltipContent = styled(Tooltip.Content)`
  background: ${({ theme }) => theme.colors.neutral[900]};
  color: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.xs.size};
  line-height: ${({ theme }) => theme.typography.scale.xs.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  max-width: 280px;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  user-select: none;
  z-index: 50;

  &[data-state='delayed-open'],
  &[data-state='instant-open'] {
    animation: ${fadeIn} 150ms ease;
  }

  &[data-state='closed'] {
    animation: ${fadeOut} 150ms ease;
  }
`;

export const StyledTooltipArrow = styled(Tooltip.Arrow)`
  fill: ${({ theme }) => theme.colors.neutral[900]};
`;
