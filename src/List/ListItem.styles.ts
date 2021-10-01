import styled, { css } from 'styled-components';

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export const StyledListItem = styled.div<ListItemProps>`
  color: ${p => p.theme.colors.grayDark};
  font-weight: 700;
  background-color: ${p => p.theme.colors.white};
  position: relative;
  padding: ${p => p.theme.spacing.xsmall};

  ${p =>
    p.onClick &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${p.theme.colors.grayLighter};
      }
      &:focus,
      &:active {
        color: ${p.theme.colors.grayDark};
        background-color: ${p.theme.colors.gray};
        outline: none;
      }
    `};

  ${p =>
    p.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background-color: transparent;
        outline: none;
      }
    `};
`;
