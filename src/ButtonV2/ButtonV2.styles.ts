import styled, { css } from 'styled-components';
import { ButtonV2Props } from './ButtonV2';
import { StyledBadge } from '../Badge/Badge.styles';

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop: any) => prop,
})<ButtonV2Props>`
  border: none;
  color: white;
  position: relative;
  cursor: pointer;

  /* SIZE */
  ${({ theme, size }) =>
    size === 'standard' &&
    css`
      font-size: ${theme.font.size.text.base};
      line-height: ${theme.font.lineHeight.text.base};
      padding: ${theme.spacing.xsmall} ${theme.spacing.base};
    `}
  ${({ theme, size }) =>
    size === 'small' &&
    css`
      font-size: ${theme.font.size.text.xsmall};
      line-height: ${theme.font.lineHeight.text.xsmall};
      padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
    `}
  ${({ theme, size }) =>
    size === 'large' &&
    css`
      font-size: ${theme.font.size.text.large};
      line-height: ${theme.font.lineHeight.text.large};
      padding: ${theme.spacing.small} ${theme.spacing.large};
    `}


  /* RADIUS */
  ${({ radius }) =>
    radius === 'standard' &&
    css`
      border-radius: 6px;
    `}
  ${({ radius }) =>
    radius === 'round' &&
    css`
      border-radius: 50px;
    `}

  /* VARIANT */
  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      background: ${theme.colors.aliases.primary};
    `}
  ${({ theme, variant }) =>
    variant === 'secondary' &&
    css`
      background: ${theme.colors.aliases.secondary};
    `}
  ${({ theme, variant }) =>
    variant === 'tertiary' &&
    css`
      background: ${theme.colors.white};
      border: 2px solid ${theme.colors.grayDark};
      color: ${theme.colors.grayDark};
    `}
  ${({ theme, variant }) =>
    variant === 'danger' &&
    css`
      background: ${theme.colors.system.red};
    `}
    ${({ theme, variant }) =>
      variant === 'white' &&
      css`
        background: ${theme.colors.white};
        color: ${theme.colors.black};
      `}

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  & > ${StyledBadge} {
    position: absolute;
    top: -4px;
    right: -4px;
    ${({ radius }) =>
      radius === 'round' &&
      css`
        top: -7px;
        right: 0;
      `}
	}
`;
