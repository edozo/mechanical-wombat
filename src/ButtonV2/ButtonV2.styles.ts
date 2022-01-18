import styled, { css } from 'styled-components';
import { ButtonV2Props } from './ButtonV2';

export const StyledButton = styled.button<ButtonV2Props>`
  border: none;
  color: white;

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
        position: relative;
        background: ${p.theme.colors.white};
        color: ${p.theme.colors.black};
        &:before {
          background: ${p.theme.colors.aliases.primary};
        }
        &:after {
          position: absolute;
          content: 'NEW';
          height: 12px;
          width: 26px;
          background: #2818f9;
          font-family: ${p => p.theme.font.family.main};
          font-size: ${p => p.theme.spacing.xsmall};
          font-weight: 800;
          line-height: 12px;
          color: ${p.theme.colors.white};
          border-radius: 3px;
          text-align: center;
          letter-spacing: 0.1em;
          top: -5px;
          right: 0;
        }
      `}
  
  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background: ${p => p.theme.colors.gray};
    cursor: not-allowed;
  }
`;
