import styled, { css, DefaultTheme } from 'styled-components';
import { TableDownloadButtonV2Props } from './TableDownloadButtonV2';

type BaseColor = 'primary' | 'secondary';

const getV2Tones = (theme: DefaultTheme, variant: BaseColor) => {
  const { indigo } = theme.colors;
  const tones = {
    primary: { main: indigo[900], light: indigo[700], dark: indigo[950] },
    secondary: { main: indigo[600], light: indigo[500], dark: indigo[700] },
  };
  return tones[variant];
};

export const TableActionButtonV2 = styled.button<TableDownloadButtonV2Props>`
  height: 100%;
  width: 100%;
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  ${({ theme, variant }) => {
    const { main, light, dark } = getV2Tones(theme, variant);
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
        background-color: ${theme.colors.neutral[300]};
        border: 2px solid ${theme.colors.neutral[300]};
        color: ${theme.colors.neutral[500]};
        cursor: not-allowed;
      }
    `;
  }};
`;
