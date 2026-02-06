import styled, { css } from 'styled-components';

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  variant?: string;
  name?: string;
  onClick?: () => void;
}

export const StyledListItem = styled.div.withConfig({
  shouldForwardProp: (prop: any) => prop,
})<ListItemProps>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayDark};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  padding: ${({ theme }) => theme.spacing.xsmall};
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
  &:first-of-type {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &:last-of-type {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:hover {
    background-color: ${({ variant, theme }) => (variant === 'platform' ? '#f2f6f9' : theme.colors.grayLighter)};
  }
  &:focus,
  &:active {
    background-color: ${({ variant, theme }) => (variant === 'platform' ? '#d6e1eb' : theme.colors.gray)};
    color: ${({ theme }) => theme.colors.grayDark};
    outline: none;
  }

  ${({ variant, disabled, theme }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: ${variant === 'platform' ? '#d6e1eb' : theme.colors.gray};
      &:hover,
      &:focus,
      &:active {
        background-color: ${variant === 'platform' ? '#d6e1eb' : theme.colors.gray};
        outline: none;
      }
    `};
`;
