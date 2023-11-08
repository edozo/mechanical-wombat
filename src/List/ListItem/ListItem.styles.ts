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
  color: ${p => p.theme.colors.grayDark};
  font-weight: 700;
  background-color: ${p => p.theme.colors.white};
  position: relative;
  padding: ${p => p.theme.spacing.xsmall};
  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.gray};
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
    background-color: ${p => (p.variant === 'platform' ? '#f2f6f9' : p.theme.colors.grayLighter)};
  }
  &:focus,
  &:active {
    background-color: ${p => (p.variant === 'platform' ? '#d6e1eb' : p.theme.colors.gray)};
    color: ${p => p.theme.colors.grayDark};
    outline: none;
  }

  ${p =>
    p.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${p.variant === 'platform' ? '#d6e1eb' : p.theme.colors.gray};
      &:hover,
      &:focus,
      &:active {
        background-color: ${p.variant === 'platform' ? '#d6e1eb' : p.theme.colors.gray};
        outline: none;
      }
    `};
`;
