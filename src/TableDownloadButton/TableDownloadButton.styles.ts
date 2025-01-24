import styled, { css } from 'styled-components';
import { TableDownloadButtonProps } from './TableDownloadButton';

type BaseColor = 'primary' | 'secondary';
type ColorVariant = BaseColor | `${BaseColor}Light` | `${BaseColor}Dark`;

export const TableActionButton = styled.button<TableDownloadButtonProps>`
  height: 100%;
  width: 100%;
  color: white;
  ${p => {
    const { variant } = p;
    const main = p.theme.colors.aliases[variant];
    const light = p.theme.colors.aliases[`${variant}Light` as ColorVariant];
    const dark = p.theme.colors.aliases[`${variant}Dark` as ColorVariant];
    return css`
      border: 2px solid ${main};
      background-color: ${main};
      outline: none;
      &:hover {
        background-color: ${light};
        border: 2px solid ${light};
      }
      &:focus {
        background-color: ${light};
        border: 2px solid ${dark};
        outline: none;
      }
      &:active {
        background-color: ${dark};
      }
      &:disabled {
        background-color: ${p.theme.colors.gray};
        border: 2px solid ${p.theme.colors.gray};
        cursor: not-allowed;
      }
    `;
  }};
`;
