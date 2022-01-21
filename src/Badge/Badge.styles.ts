import styled, { css } from 'styled-components';
import { BadgeProps } from './Badge';

export const StyledBadge = styled.div<BadgeProps>`
  display: inline-block;
  font-family: ${p => p.theme.font.family.main};
  font-weight: ${p => p.theme.font.weight.bold};
  color: ${p => p.color && (p.theme.colors.aliases[p.color] || p.theme.colors[p.color] || p.color)};
  background-color: ${p =>
    p.background && (p.theme.colors.aliases[p.background] || p.theme.colors[p.background] || p.background)};
  text-align: center;
  ${p =>
    p.size === 'standard' &&
    css`
      padding: ${p.theme.spacing.xxsmall} ${p.theme.spacing.xsmall};
      border-radius: ${p.theme.borderRadius.standard};
      border: 2px solid
        ${p.background && (p.theme.colors.aliases[p.background] || p.theme.colors[p.background] || p.background)};
      font-size: ${p.theme.font.size.text.xsmall};
      line-height: ${p.theme.font.lineHeight.text.xsmall};
    `}
  ${p =>
    p.size === 'small' &&
    css`
      border-radius: ${p.theme.borderRadius.small};
      font-size: 6px;
      line-height: 12px;
      height: 12px;
      width: 26px;
    `}
`;
