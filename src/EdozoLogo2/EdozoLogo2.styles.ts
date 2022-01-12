import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from './edozo-logo.svg';
import { Props } from './EdozoLogo2';

export const StyledLogo = styled(Logo)<Props>`
  ${p =>
    p.size === 'standard' &&
    css`
      width: 137px;
      height: 35px;
    `}
  ${p =>
    p.size === 'small' &&
    css`
      width: 85px;
      height: 20px;
    `}
`;

export const ProductName = styled.span<Props>`
    
    color: ${p => p.theme.colors.aliases.primary};

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
