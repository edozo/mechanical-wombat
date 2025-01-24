// TODO: Finalize this once talked to Silvia about design system
import styled, { css } from 'styled-components';
import { defaultTheme } from '../defaultTheme';
import { ButtonProps } from './Button';

type ColorAliasKey = keyof typeof defaultTheme.colors.aliases;

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${p => p.theme.font.family.main};
  border: 2px solid ${p => p.theme.colors.aliases[p.color || 'primary']};
  background-color: ${p => p.theme.colors.aliases[p.color || 'primary']};
  border-radius: ${p => p.theme.borderRadius[p.borderRadius || 'standard']};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing.xsmall} ${p => p.theme.spacing.base}; /* Get from theme */
  font-size: 1.2em; /* Get from theme */
  transition: all 0.2s; /* Get from theme */
  &:hover {
    background-color: ${p => p.theme.colors.aliases[p.color ? (`${p.color}Light` as ColorAliasKey) : 'primaryLight']};
    border-color: ${p => p.theme.colors.aliases[p.color ? (`${p.color}Light` as ColorAliasKey) : 'primaryLight']};
  }
  &:focus {
    background-color: ${p =>
      p.theme.colors.aliases[(p.color && (`${p.color}Light` as ColorAliasKey)) || 'primaryLight']};
    border-color: ${p => p.theme.colors.aliases[(p.color && (`${p.color}Dark` as ColorAliasKey)) || 'primaryDark']};
    outline: none;
  }
  &:active {
    background-color: ${p => p.theme.colors.aliases[(p.color && (`${p.color}Dark` as ColorAliasKey)) || 'primaryDark']};
    border-color: ${p => p.theme.colors.aliases[(p.color && (`${p.color}Dark` as ColorAliasKey)) || 'primaryDark']};
    outline: none;
  }

  ${p =>
    p.variant === 'outline' &&
    css`
      background-color: transparent;
      color: ${p.theme.colors.aliases[p.color || 'primary']};
      &:hover,
      &:focus,
      &:active {
        color: ${p.theme.colors.white};
      }
    `};

  ${p =>
    p.variant === 'ghost' &&
    css`
      background-color: transparent;
      border: 2px solid transparent;
      color: ${p.theme.colors.aliases[p.color || 'primary']};
      &:hover,
      &:focus,
      &:active {
        color: ${p.theme.colors.white};
      }
    `};

  &:disabled,
  &[disabled] {
    background-color: ${p => p.theme.colors.gray};
    border-color: ${p => p.theme.colors.gray};
    color: ${p => p.theme.colors.grayLighter};
  }
`;
