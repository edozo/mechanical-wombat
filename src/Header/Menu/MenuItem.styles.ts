import styled, { css } from 'styled-components';
import { Context } from '../Header';

export const StyledMenuItem = styled.div<Context>`
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

    &:after {
      content: '';
      transition: height 0.2s ease-out;
      height: 0px;
      width: 100%;
      background: ${p => p.theme.colors.aliases.primary};
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
      position: absolute;
      bottom: 0;
      left: 0;
    }

    :hover {
      text-decoration: none;
      color: ${p => p.theme.colors.aliases.primary};
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
    }

    :hover:after {
      height: 6px;
    }
  }
`;
