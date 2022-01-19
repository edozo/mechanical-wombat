import styled, { css } from 'styled-components';
import { MenuItemProps } from './MenuItem';

export const StyledMenuItemWrapper = styled.div<MenuItemProps>`
  > a {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    text-decoration: none;
    font-size: ${p => p.theme.font.size.text.base};
    margin-left: ${p => p.theme.spacing.small};
    color: ${p => p.theme.colors.grayDarker};

    &.active:after {
      height: 6px;
    }

    ${p =>
      p.appName === 'helpCentre' &&
      css`
        padding: 0 ${p.theme.spacing.large} 0 ${p.theme.spacing.large};
      `} 

    &:after {
      content: '';
      transition: height 0.2s ease-out;
      height: 0px;
      width: 100%;
      ${p =>
        p.appName === 'maps' &&
        css`
          background: ${p.theme.colors.aliases.primary};
        `}
      ${p =>
        p.appName === 'occupiers' &&
        css`
          background: ${p.theme.colors.appColors.occupiers};
        `} 
      ${p =>
        p.appName === 'insight' &&
        css`
          background: ${p.theme.colors.appColors.insight};
        `} 
      ${p =>
        p.appName === 'helpCentre' &&
        css`
          background: ${p.theme.colors.appColors.helpCentre};
        `} 
      position: absolute;
      bottom: 0;
      left: 0;
    }

    :hover {
      text-decoration: none;
      ${p =>
        p.appName === 'maps' &&
        css`
          color: ${p.theme.colors.aliases.primary};
        `} 
      ${p =>
        p.appName === 'occupiers' &&
        css`
          color: ${p.theme.colors.appColors.occupiers};
        `} 
      ${p =>
        p.appName === 'insight' &&
        css`
          color: ${p.theme.colors.appColors.insight};
        `} 
      ${p =>
        p.appName === 'helpCentre' &&
        css`
          color: ${p.theme.colors.appColors.helpCentre};
        `}
    }

    :hover:after {
      height: 6px;
    }
`;
