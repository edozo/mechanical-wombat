import styled, { keyframes } from 'styled-components';
import * as Popover from '@radix-ui/react-popover';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const StyledPopoverV2Content = styled(Popover.Content)`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  z-index: 50;

  &[data-state='open'] {
    animation: ${fadeIn} 150ms ease;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.indigo[400]};
    outline-offset: -2px;
  }
`;

export const StyledPopoverV2Arrow = styled(Popover.Arrow)`
  fill: ${({ theme }) => theme.colors.neutral[50]};
`;
