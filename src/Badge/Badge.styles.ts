import styled, { css } from 'styled-components';

const resolveColor = (theme: any, color?: string): string | undefined => {
  if (!color) return undefined;
  return theme.colors.aliases[color] || theme.colors[color] || color;
};

interface StyledBadgeProps {
  $background?: string;
  $color?: string;
  $size?: 'xxsmall' | 'small' | 'standard';
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.family.main};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme, $color }) => resolveColor(theme, $color)};
  background-color: ${({ theme, $background }) => resolveColor(theme, $background)};
  text-align: center;

  ${({ theme, $size, $background }) => {
    const backgroundColor = resolveColor(theme, $background);
    return (
      $size === 'standard' &&
      css`
        padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
        border-radius: ${theme.borderRadius.standard};
        border: 2px solid ${backgroundColor && resolveColor(theme, backgroundColor)};
        font-size: ${theme.font.size.text.xsmall};
        line-height: ${theme.font.lineHeight.text.xsmall};
      `
    );
  }}

  ${({ theme, $size, $background }) => {
    const backgroundColor = resolveColor(theme, $background);
    return (
      $size === 'small' &&
      css`
        padding: 2px ${theme.spacing.xxsmall};
        border-radius: ${theme.borderRadius.small};
        font-size: ${theme.font.size.text.xxsmall};
        line-height: ${theme.font.lineHeight.text.xxsmall};
        border: 2px solid ${backgroundColor && resolveColor(theme, backgroundColor)};
      `
    );
  }}

  ${({ theme, $size, $background }) => {
    const backgroundColor = resolveColor(theme, $background);
    return (
      $size === 'xxsmall' &&
      css`
        padding: 0 2px;
        border-radius: ${theme.borderRadius.small};
        font-size: 6px;
        line-height: 10px;
        border: 2px solid ${backgroundColor && resolveColor(theme, backgroundColor)};
      `
    );
  }}
`;
