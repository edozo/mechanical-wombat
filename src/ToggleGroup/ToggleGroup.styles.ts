// TODO: Finalize this once talked to Silvia about design system
import styled, { css } from 'styled-components';

export interface StyleProps {
  $isActive?: boolean;
}

export const StyledToggleGroup = styled.div<StyleProps>`
  background-color: ${({ theme }) => theme.colors.aliases.primary};
  border-radius: ${({ theme }) => theme.borderRadius.standard};
  display: inline-block;
`;

export const StyledToggleButton = styled.button<StyleProps>`
  font-size: ${({ theme }) => theme.font.size.text.small};
  line-height: ${({ theme }) => theme.font.lineHeight.text.base};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.standard};
  padding: 0 ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.xxsmall};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.aliases.primary};
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
  ${({ theme, $isActive }) =>
    $isActive &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.aliases.primary};
    `};
`;
