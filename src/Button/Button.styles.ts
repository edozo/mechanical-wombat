import styled from 'styled-components';

export interface StyleProps {
  color?: 'primary' | 'secondary';
  variant?: 'standard' | 'outline' | 'ghost';
  size?: 'small' | 'standard' | 'large';
  radius?: 'small' | 'standard' | 'large';
  disabled?: boolean;
}

const pseudoHelper = {
  LIGHT: 'Light',
  DARK: 'Dark',
};

export const StyledButton = styled.button<StyleProps>`
  font-family: ${p => p.theme.font.family.body};
  border: 2px solid ${p => p.theme.colors.aliases[p.color || 'primary']};
  background-color: ${p => p.theme.colors.aliases[p.color || 'primary']};
  border-radius: ${p => p.theme.borderRadius[p.radius || 'standard']};
  color: ${p => p.theme.colors.white};
  font-size: 1.2em; /* Get from theme */
  padding: 8px 24px; /* Get from theme */
  transition: all 0.2s; /* Get from theme */
  &:hover {
    background-color: ${p => p.theme.colors.aliases[(p.color && `${p.color}${pseudoHelper.LIGHT}`) || 'primaryLight']};
    border-color: ${p => p.theme.colors.aliases[(p.color && `${p.color}${pseudoHelper.LIGHT}`) || 'primaryLight']};
  }
  &:focus {
    background-color: ${p => p.theme.colors.aliases[(p.color && `${p.color}${pseudoHelper.LIGHT}`) || 'primaryLight']};
    border-color: ${p => p.theme.colors.aliases[(p.color && `${p.color}${pseudoHelper.DARK}`) || 'primaryDark']};
    outline: none;
  }
  &:active {
    background-color: ${p => p.theme.colors.aliases[(p.color && `${p.color}${pseudoHelper.DARK}`) || 'primaryDark']};
    border-color: ${p => p.theme.colors.aliases[(p.color && `${p.color}${pseudoHelper.DARK}`) || 'primaryDark']};
    outline: none;
  }
  &:disabled,
  &[disabled] {
    background-color: ${p => p.theme.colors.gray3};
    border-color: ${p => p.theme.colors.gray3};
  }
`;
