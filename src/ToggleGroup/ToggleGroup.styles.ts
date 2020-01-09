// TODO: Finalize this once talked to Silvia about design system
import styled, { css } from 'styled-components';

export interface StyleProps {
  isActive?: boolean;
  disabled?: boolean;
}

export const StyledToggleGroup = styled.div<StyleProps>`
  background-color: ${p => p.theme.colors.aliases.primary};
  border-radius: ${p => p.theme.borderRadius.standard};
  display: inline-block;
`;

export const StyledToggleButton = styled.button<StyleProps>`
  font-size: ${p => p.theme.font.size.label};
  font-weight: ${p => p.theme.font.weight.semibold};
  background-color: transparent;
  color: ${p => p.theme.colors.white};
  border: none;
  border-radius: ${p => p.theme.borderRadius.standard};
  padding: ${p => p.theme.spacing.xxsmall} ${p => p.theme.spacing.small};
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
