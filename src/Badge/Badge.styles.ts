import styled from 'styled-components';
import { Props } from './Badge';

export const StyledBadge = styled.div<Props>`
  display: inline-block;
  padding: ${p => p.theme.spacing.xsmall} ${p => p.theme.spacing.small};
  border-radius: ${p => p.theme.borderRadius.standard};
  border: 2px solid
    ${p => p.background && (p.theme.colors.aliases[p.background] || p.theme.colors[p.background] || p.background)};
  background-color: ${p =>
    p.background && (p.theme.colors.aliases[p.background] || p.theme.colors[p.background] || p.background)};
  color: ${p => p.color && (p.theme.colors.aliases[p.color] || p.theme.colors[p.color] || p.color)};
  font-family: ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.label};
  line-height: ${p => p.theme.font.lineHeight.label};
  font-weight: ${p => p.theme.font.weight.bold};
`;
