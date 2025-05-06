import styled, { css } from 'styled-components';
import { BadgeProps } from './Badge';

const resolveColor = (theme: any, color?: string): string | undefined => {
  if (!color) return undefined;
  return theme.colors.aliases[color] || theme.colors[color] || color;
};

export const StyledBadge = styled.div<BadgeProps>`
  display: inline-block;
  font-family: ${p => p.theme.font.family.main};
  font-weight: ${p => p.theme.font.weight.bold};
  color: ${p => resolveColor(p.theme, p.color)};
  background-color: ${p => resolveColor(p.theme, p.background)};
  text-align: center;

  ${p => {
    const backgroundColor = resolveColor(p.theme, p.background);
    return (
      p.size === 'standard' &&
      css`
        padding: ${p.theme.spacing.xxsmall} ${p.theme.spacing.xsmall};
        border-radius: ${p.theme.borderRadius.standard};
        border: 2px solid ${backgroundColor && resolveColor(p.theme, backgroundColor)};
        font-size: ${p.theme.font.size.text.xsmall};
        line-height: ${p.theme.font.lineHeight.text.xsmall};
      `
    );
  }}

  ${p => {
    const backgroundColor = resolveColor(p.theme, p.background);
    return (
      p.size === 'small' &&
      css`
        padding: 2px ${p.theme.spacing.xxsmall};
        border-radius: ${p.theme.borderRadius.small};
        font-size: ${p.theme.font.size.text.xxsmall};
        line-height: ${p.theme.font.lineHeight.text.xxsmall};
        border: 2px solid ${backgroundColor && resolveColor(p.theme, backgroundColor)};
      `
    );
  }}

  ${p => {
    const backgroundColor = resolveColor(p.theme, p.background);
    return (
      p.size === 'xxsmall' &&
      css`
        padding: 0 2px;
        border-radius: ${p.theme.borderRadius.small};
        font-size: 6px;
        line-height: 10px;
        border: 2px solid ${backgroundColor && resolveColor(p.theme, backgroundColor)};
      `
    );
  }}
`;
