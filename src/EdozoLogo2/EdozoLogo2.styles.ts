import styled, { css } from 'styled-components';
import { Props } from './EdozoLogo2';

export const ProductName = styled.span<Props>`  
  ${p =>
    p.size === 'standard' &&
    css`
      font-size: ${p.theme.font.size.text.xlarge};
      margin-left: ${p.theme.spacing.xsmall};
    `}
    ${p =>
      p.size === 'small' &&
      css`
        font-size: ${p.theme.font.size.text.large};
        margin-left: ${p.theme.spacing.xxsmall};
      `}
    ${p =>
      p.colour === 'Maps' &&
      css`
        color: ${p.theme.colors.aliases.primary};
      `} 
    ${p =>
      p.colour === 'Insight' &&
      css`
        color: #ff8955;
      `} 
    ${p =>
      p.colour === 'Occupiers' &&
      css`
        color: #7e0bc2;
      `} 
  font-weight: ${p => p.theme.font.weight.semibold};
  font-family: ${p => p.theme.font.family.main};
`;
