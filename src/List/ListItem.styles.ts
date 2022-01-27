import styled, { css } from 'styled-components';

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  variant?: string;
  name?: string;
}

export const StyledListItem = styled.div<ListItemProps>`
  color: ${p => p.theme.colors.grayDark};
  font-weight: 700;
  background-color: ${p => p.theme.colors.white};
  position: relative;
  padding: ${p => p.theme.spacing.xsmall};

  ${p =>
    p.variant === 'platform' &&
    css`
      :not(:last-child) {
        border-bottom: 1px solid ${p.theme.colors.gray}80;
        border-radius: 0;
      }
      :first-child {
        border-radius: ${p.theme.spacing.xxsmall} ${p.theme.spacing.xxsmall} 0 0;
      }
      :last-child {
        border-radius: 0 0 ${p.theme.spacing.xxsmall} ${p.theme.spacing.xxsmall};
      }
      font-family: ${p.theme.font.family.main};
      font-size: ${p.theme.font.size.text.xsmall};
      font-weight: ${p.theme.font.weight.regular};
    `};

  ${p =>
    p.onClick &&
    p.variant === 'platform' &&
    css`
      cursor: pointer;
      &:hover {
        background-color: #f2f6f9;
        :first-child {
          border-radius: ${p.theme.spacing.xxsmall} ${p.theme.spacing.xxsmall} 0 0;
        }
        :last-child {
          border-radius: 0 0 ${p.theme.spacing.xxsmall} ${p.theme.spacing.xxsmall};
        }
      }
      &:focus,
      &:active {
        background-color: #d6e1eb;
        border-radius: 0;
        :first-child {
          border-radius: ${p.theme.spacing.xxsmall} ${p.theme.spacing.xxsmall} 0 0;
        }
        :last-child {
          border-radius: 0 0 ${p.theme.spacing.xxsmall} ${p.theme.spacing.xxsmall};
        }
      }
    `};

  ${p =>
    p.onClick &&
    !(p.variant === 'platform') &&
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
    p.variant === 'platform' &&
    css`
      cursor: not-allowed;
      background-color: #d6e1eb;
      :first-child {
        border-radius: ${p.theme.spacing.xxsmall} ${p.theme.spacing.xxsmall} 0 0;
      }
      :last-child {
        border-radius: 0 0 ${p.theme.spacing.xxsmall} ${p.theme.spacing.xxsmall};
      }
    `};

  ${p =>
    p.disabled &&
    !(p.variant === 'platform') &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background-color: transparent;
        outline: none;
      }
    `};
`;
