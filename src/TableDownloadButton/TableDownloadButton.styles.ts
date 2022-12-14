import styled, { css } from 'styled-components';
import { TableDownloadButtonProps } from './TableDownloadButton';

export const TableActionButton = styled.button<TableDownloadButtonProps>`
  height: 100%;
  width: 100%;
  color: white;
  ${p =>
    css`
      border: 2px solid ${p.theme.colors.aliases[p.variant]};
      background-color: ${p.theme.colors.aliases[p.variant]};
      outline: none;
      &:hover {
        background-color: ${p.theme.colors.aliases[`${p.variant}Light`]};
        border: 2px solid ${p.theme.colors.aliases[`${p.variant}Light`]};
      }
      &:focus {
        background-color: ${p.theme.colors.aliases[`${p.variant}Light`]};
        border: 2px solid ${p.theme.colors.aliases[`${p.variant}Dark`]};
        outline: none;
      }
      &:active {
        background-color: ${p.theme.colors.aliases[`${p.variant}Dark`]};
      }
      &:disabled {
        background-color: ${p.theme.colors.gray};
        border: 2px solid ${p.theme.colors.gray};
        cursor: not-allowed;
      }
    `};
` as React.FunctionComponent<TableDownloadButtonProps>;
