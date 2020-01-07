// TODO: Finalize this once talked to Silvia about design system
import styled, { css } from 'styled-components';

export interface StyleProps {
  color?: 'primary' | 'secondary';
  variant?: 'standard' | 'outline' | 'ghost';
  size?: 'small' | 'standard' | 'large';
  radius?: 'small' | 'standard' | 'large';
  isActive?: boolean;
  disabled?: boolean;
}

export const StyledToggleGroup = styled.div<StyleProps>`
  background-color: ${p => p.theme.colors.aliases.primary};
  border-radius: ${p => p.theme.borderRadius.standard};
  display: inline-block;
`;

export const StyledToggleButton = styled.button<StyleProps>`
  font-family: ${p => p.theme.font.size.label};
  background-color: transparent;
  color: ${p => p.theme.colors.white};
  border: none;
  border-radius: ${p => p.theme.borderRadius.standard};
  margin: ${p => p.theme.spacing.xxsmall};
  :hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.aliases.primary};
    opacity: 0.8;
  }
  :focus {
    outline: none;
  }
  ${p =>
    p.isActive &&
    css`
      background-color: ${p.theme.colors.white};
      color: ${p.theme.colors.aliases.primary};
    `};
`;
