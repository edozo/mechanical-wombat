import styled, { css } from 'styled-components';
import * as Collapsible from '@radix-ui/react-collapsible';

export const StyledCollapseRoot = styled(Collapsible.Root)<{ $square: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme, $square }) => ($square ? '0' : theme.borderRadius.md)};
  overflow: hidden;
`;

export const StyledCollapseTrigger = styled(Collapsible.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral[900]};
  text-align: left;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.indigo[400]};
    outline-offset: -2px;
  }
`;

export const ChevronIcon = styled.span<{ $open: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral[500]};
  transition: transform 200ms ease;

  ${({ $open }) =>
    $open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const StyledCollapseContent = styled(Collapsible.Content)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  overflow: hidden;
`;
