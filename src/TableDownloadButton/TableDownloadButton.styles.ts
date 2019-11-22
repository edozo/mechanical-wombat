import styled, { css } from 'styled-components';

interface Props {
  readonly variant: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const TableActionButton = styled.button<Props>`
  border-radius: 0px 0px 0px 2px;
  height: 70px;
  width: 56px;
  color: white;
  ${p =>
    p.variant === 'primary' &&
    css`
      background-color: ${p.theme.colors.skyBlue};
      outline: none;
      &:hover {
        background-color: ${p.theme.colors.lightSkyBlue};
      }
      &:focus {
        background-color: ${p.theme.colors.lightSkyBlue};
        border: 2px solid ${p.theme.colors.darkSkyBlue};
      }
      &:active {
        background-color: ${p.theme.colors.darkSkyBlue};
      }
      &:disabled {
        background-color: ${p.theme.colors.gray3};
      }
    `};
` as React.FunctionComponent<Props>;
