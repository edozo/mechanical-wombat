import styled, { css } from 'styled-components';

interface Props {
  readonly variant: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const TableActionButton = styled.button<Props>`
  height: 70px;
  width: 56px;
  color: white;
  ${p =>
    p.variant === 'primary' &&
    css`
      border: 2px solid ${p.theme.colors.aliases.primary};
      background-color: ${p.theme.colors.aliases.primary};
      outline: none;
      &:hover {
        background-color: ${p.theme.colors.aliases.primaryLight};
        border: 2px solid ${p.theme.colors.aliases.primaryLight};
      }
      &:focus {
        background-color: ${p.theme.colors.aliases.primaryLight};
        border: 2px solid ${p.theme.colors.aliases.primaryDark};
        outline: none;
      }
      &:active {
        background-color: ${p.theme.colors.aliases.primaryDark};
      }
      &:disabled {
        background-color: ${p.theme.colors.gray3};
        border: 2px solid ${p.theme.colors.gray3};
      }
    `};
` as React.FunctionComponent<Props>;
