import styled, { css } from 'styled-components';

interface OptionProps {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const StyledButton = styled.button<OptionProps>`
  border: 2px solid ${p => p.theme.colors.aliases.primary};
  border-radius: 50px;
  font-size: 1.2em;
  font-family: ${p => p.theme.font.family.body};
  padding: 8px 24px;
  transition: all 0.2s;
  box-sizing: border-box;
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.aliases.primary};
  ${p =>
    p.variant === 'secondary' &&
    css`
      background-color: red;
    `}

  &:hover {
    background: ${p => p.theme.colors.aliases.primaryLight};
    border: 2px solid ${p => p.theme.colors.aliases.primaryLight};
    color: #fff;
  }
  &:focus {
    background: ${p => p.theme.colors.aliases.primaryLight};
    border: 2px solid ${p => p.theme.colors.aliases.primaryDark};
    outline: none;
  }
  &:active {
    background: ${p => p.theme.colors.aliases.primaryDark};
    border: 2px solid ${p => p.theme.colors.aliases.primaryDark};
    outline: none;
  }

  ${p =>
    p.disabled &&
    css`
      background-color: ${p.theme.colors.gray3};
    `}
`;
