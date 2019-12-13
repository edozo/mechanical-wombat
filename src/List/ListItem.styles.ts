import styled, { css } from 'styled-components';

export interface StyleProps {
  disabled?: boolean;
  onClick?: () => void;
}

export const StyledListItem = styled.div<StyleProps>`
  color: ${p => p.theme.colors.gray4};
  font-weight: 700;
  background-color: ${p => p.theme.colors.white};
  position: relative;
  padding: ${p => p.theme.spacing.xsmall};

  ${p =>
    p.onClick &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${p.theme.colors.gray1};
      }
      &:focus,
      &:active {
        color: ${p.theme.colors.gray4};
        background-color: ${p.theme.colors.gray3};
        outline: none;
      }
    `};

  ${p =>
    p.disabled &&
    css`
      opacity: 0.5;
      cursor: default;
      &:hover {
        background-color: transparent;
        outline: none;
      }
    `};
`;
