import styled, { css } from 'styled-components';
import { EdozoLogoProps } from './EdozoLogo';

export const BetaBadge = styled.span`
  font-size: ${({ theme }) => theme.font.size.text.small};
  background: ${({ theme }) => theme.colors.gray};
  padding: 0 ${({ theme }) => theme.spacing.xxsmall};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  align-self: flex-end;
  margin-left: ${({ theme }) => theme.spacing.xsmall};
  color: ${({ theme }) => theme.colors.grayDarker};
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
`;

export const StyledLogo = styled.div<EdozoLogoProps>`
  /* MAPS */
  ${({ size, variant }) =>
    size === 'small' &&
    variant === 'maps' &&
    css`
      width: 92px;
      height: 17px;
    `}
      ${({ size, variant }) =>
        size === 'standard' &&
        variant === 'maps' &&
        css`
          width: 149px;
          height: 26px;
        `}
      
      /* OCCUPIERS */
      ${({ size, variant }) =>
        size === 'small' &&
        variant === 'occupiers' &&
        css`
          width: 121px;
          height: 17px;
        `}
      ${({ size, variant }) =>
        size === 'standard' &&
        variant === 'occupiers' &&
        css`
          width: 195px;
          height: 26px;
        `}

      /* INSIGHT */
      ${({ size, variant }) =>
        size === 'small' &&
        variant === 'insight' &&
        css`
          width: 99px;
          height: 17px;
        `}
      ${({ size, variant }) =>
        size === 'standard' &&
        variant === 'insight' &&
        css`
          width: 163px;
          height: 26px;
        `}

      /* HELP CENTRE */
      ${({ size, variant }) =>
        size === 'small' &&
        variant === 'helpCentre' &&
        css`
          width: 133px;
          height: 17px;
        `}
      ${({ size, variant }) =>
        size === 'standard' &&
        variant === 'helpCentre' &&
        css`
          width: 209px;
          height: 26px;
        `}
        
      /* EDOZO */
      ${({ size, variant }) =>
        size === 'small' &&
        variant === 'edozo' &&
        css`
          width: 54px;
          height: 17px;
        `}
      ${({ size, variant }) =>
        size === 'standard' &&
        variant === 'edozo' &&
        css`
          width: 84px;
          height: 26px;
        `}
`;
