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
  ${p =>
    p.size === 'standard' &&
    css`
      font-size: ${p.theme.font.size.text.base};
      line-height: ${p.theme.font.lineHeight.text.base};
      padding: ${p.theme.spacing.xsmall} ${p.theme.spacing.base};
    `}
  ${p =>
    p.size === 'small' &&
    css`
      font-size: ${p.theme.font.size.text.xsmall};
      line-height: ${p.theme.font.lineHeight.text.xsmall};
      padding: ${p.theme.spacing.xxsmall} ${p.theme.spacing.small};
    `}
      
  /* RADIUS */
  ${p =>
    p.radius === 'standard' &&
    css`
      border-radius: 6px;
    `}
  ${p =>
    p.radius === 'round' &&
    css`
      border-radius: 50px;
    `}
      
  /* VARIANT */
  ${p =>
    p.variant === 'primary' &&
    css`
      background: ${p.theme.colors.aliases.primary};
    `}
  ${p =>
    p.variant === 'secondary' &&
    css`
      background: ${p.theme.colors.aliases.secondary};
    `}
  ${p =>
    p.variant === 'tertiary' &&
    css`
      background: ${p.theme.colors.white};
      border: 2px solid ${p.theme.colors.grayDark};
      color: ${p.theme.colors.grayDark};
    `}
  ${p =>
    p.variant === 'danger' &&
    css`
      background: ${p.theme.colors.system.red};
    `}
    ${p =>
      p.variant === 'white' &&
      css`
        background: ${p.theme.colors.white};
        color: ${p.theme.colors.black};
      `}
  
  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background: ${p => p.theme.colors.gray};
    cursor: not-allowed;
  }

  & > ${StyledBadge} {
    position: absolute;
    top: -4px;
    right: -4px;
    ${p =>
      p.radius === 'round' &&
      css`
        top: -7px;
        right: 0;
      `}
	}
`;
