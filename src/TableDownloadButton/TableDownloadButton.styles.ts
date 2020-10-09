import styled, { css } from 'styled-components';
import { TableDownloadButtonProps } from './TableDownloadButton';

export const TableActionButton = styled.button<TableDownloadButtonProps>`
  height: 100%;
  width: 100%;
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
        background-color: ${p.theme.colors.gray};
        border: 2px solid ${p.theme.colors.gray};
        cursor: not-allowed;
      }
    `};
` as React.FunctionComponent<TableDownloadButtonProps>;
