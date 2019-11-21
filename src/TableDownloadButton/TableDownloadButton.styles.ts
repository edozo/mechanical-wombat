import styled, { css } from 'styled-components';

interface Props {
  readonly variant: string;
}

export const TableActionButton = styled.button<Props>`
  border-radius: 0px 0px 0px 2px;
  height: 70px;
  width: 56px;
  ${p =>
    p.variant === 'primary' &&
    css`
      background-color: ${p.theme.colors.skyBlue};
    `};
` as React.FunctionComponent<Props>;
