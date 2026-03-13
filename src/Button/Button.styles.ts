// TODO: Finalize this once talked to Silvia about design system
import styled, { css } from 'styled-components';
import { defaultTheme } from '../defaultTheme';
import { ButtonProps } from './Button';

type ColorAliasKey = keyof typeof defaultTheme.colors.aliases;

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.font.family.main};
  border: 2px solid ${({ theme, color }) => theme.colors.aliases[color || 'primary']};
  background-color: ${({ theme, color }) => theme.colors.aliases[color || 'primary']};
  border-radius: ${({ theme, borderRadius }) => theme.borderRadius[borderRadius || 'standard']};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.base}; /* Get from theme */
  font-size: 1.2em; /* Get from theme */
  transition: all 0.2s; /* Get from theme */
  &:hover {
    background-color: ${({ theme, color }) =>
      theme.colors.aliases[color ? (`${color}Light` as ColorAliasKey) : 'primaryLight']};
    border-color: ${({ theme, color }) =>
      theme.colors.aliases[color ? (`${color}Light` as ColorAliasKey) : 'primaryLight']};
  }
  &:focus {
    background-color: ${({ theme, color }) =>
      theme.colors.aliases[color ? (`${color}Light` as ColorAliasKey) : 'primaryLight']};
    border-color: ${({ theme, color }) =>
      theme.colors.aliases[color ? (`${color}Dark` as ColorAliasKey) : 'primaryDark']};
    outline: none;
  }
  &:active {
    background-color: ${({ theme, color }) =>
      theme.colors.aliases[color ? (`${color}Dark` as ColorAliasKey) : 'primaryDark']};
    border-color: ${({ theme, color }) =>
      theme.colors.aliases[color ? (`${color}Dark` as ColorAliasKey) : 'primaryDark']};
    outline: none;
  }

  ${({ theme, variant, color }) =>
    variant === 'outline' &&
    css`
      background-color: transparent;
      color: ${theme.colors.aliases[color || 'primary']};
      &:hover,
      &:focus,
      &:active {
        color: ${theme.colors.white};
      }
    `};

  ${({ theme, variant, color }) =>
    variant === 'ghost' &&
    css`
      background-color: transparent;
      border: 2px solid transparent;
      color: ${theme.colors.aliases[color || 'primary']};
      &:hover,
      &:focus,
      &:active {
        color: ${theme.colors.white};
      }
    `};

  &:disabled,
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.grayLighter};
  }
`;
