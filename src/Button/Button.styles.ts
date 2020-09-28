import styled, { css } from 'styled-components';
import { Props } from './Button';

export const StyledButton = styled.button<Props>`
  font-family: ${p => p.theme.font.family.main};
  border-style: solid;
  border-width: 1px;
  transition: all 0.2s;
  :focus {
    outline: none;
  }


  ${p =>
    p.size === 'xsmall' &&
    css`
      font-size: ${p.theme.font.size.text.xsmall};
      line-height: ${p.theme.font.lineHeight.text.xsmall};
      padding: ${p.theme.spacing.xxsmall} ${p.theme.spacing.small};
      border-radius: 6px;
    `}
  
  ${p =>
    p.size === 'small' &&
    css`
      font-size: ${p.theme.font.size.text.small};
      line-height: ${p.theme.font.lineHeight.text.small};
      padding: 6px ${p.theme.spacing.small};
      border-radius: 8px;
    `}
  
  ${p =>
    p.size === 'base' &&
    css`
      font-size: ${p.theme.font.size.text.base};
      line-height: ${p.theme.font.lineHeight.text.base};
      padding: ${p.theme.spacing.xsmall} ${p.theme.spacing.base};
      border-radius: 10px;
    `}
  
  ${p =>
    p.size === 'large' &&
    css`
      font-size: ${p.theme.font.size.text.large};
      line-height: ${p.theme.font.lineHeight.text.large};
      padding: 10px ${p.theme.spacing.base};
      border-radius: 12px;
    `}
  
  ${p =>
    p.size === 'xlarge' &&
    css`
      font-size: ${p.theme.font.size.text.xlarge};
      line-height: ${p.theme.font.lineHeight.text.xlarge};
      padding: 13px ${p.theme.spacing.base};
      border-radius: 14px;
    `}


  ${p =>
    p.variant === 'primary' &&
    css`
      background-color: ${p.theme.colors.aliases.primary};
      border-color: ${p.theme.colors.aliases.primary};
      color: ${p.theme.colors.white};
      :hover {
        background-color: ${p.theme.colors.aliases.primaryLight};
        border-color: ${p.theme.colors.aliases.primaryLight};
      }
      :active {
        background-color: ${p.theme.colors.aliases.primaryDark};
        border-color: ${p.theme.colors.aliases.primaryDark};
      }
      :focus {
        background-color: ${p.theme.colors.aliases.primaryLight};
        border-color: ${p.theme.colors.aliases.primaryDarker};
      }
    `}

  ${p =>
    p.variant === 'secondary' &&
    css`
      background-color: ${p.theme.colors.aliases.secondary};
      border-color: ${p.theme.colors.aliases.secondary};
      color: ${p.theme.colors.white};
      border-radius: 9999px;
      :hover {
        background-color: ${p.theme.colors.aliases.secondaryLight};
        border-color: ${p.theme.colors.aliases.secondaryLight};
      }
      :active {
        background-color: ${p.theme.colors.aliases.secondaryDark};
        border-color: ${p.theme.colors.aliases.secondaryDark};
      }
      :focus {
        background-color: ${p.theme.colors.aliases.secondaryLight};
        border-color: ${p.theme.colors.aliases.secondaryDark};
      }
    `}

  ${p =>
    p.variant === 'tertiary' &&
    css`
      background-color: transparent;
      border-width: 2px;
      color: ${p.theme.colors.grayDark};
      :hover {
        background-color: ${p.theme.colors.gray};
        border-color: ${p.theme.colors.gray};
      }
      :active {
        background-color: ${p.theme.colors.gray};
        border-color: ${p.theme.colors.gray};
        color: ${p.theme.colors.grayDarker};
      }
      :focus {
        background-color: ${p.theme.colors.gray};
      }
    `}
  


  &:disabled,
  &[disabled] {
    background-color: ${p => (p.variant === 'tertiary' ? 'transparent' : p.theme.colors.gray)};
    border-color: ${p => p.theme.colors.gray};
    color: ${p => (p.variant === 'tertiary' ? p.theme.colors.gray : p.theme.colors.white)};
    cursor: not-allowed;
  }
`;
