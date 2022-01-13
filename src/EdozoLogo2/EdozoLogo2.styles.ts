import styled, { css } from 'styled-components';
import { Props } from './EdozoLogo2';

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
      p.appName === 'Maps' &&
      css`
        color: ${p.theme.colors.aliases.primary};
      `} 
    ${p =>
      p.appName === 'Insight' &&
      css`
        color: ${p.theme.colors.appColors.insight};
      `} 
    ${p =>
      p.appName === 'Occupiers' &&
      css`
        color: #7e0bc2;
      `} 
    ${p =>
      p.appName?.toLowerCase() === 'help centre' &&
      css`
        ${p.theme.colors.appColors.helpCentre};
      `} 
  
  font-weight: ${p => p.theme.font.weight.semibold};
  font-family: ${p => p.theme.font.family.main};
`;
