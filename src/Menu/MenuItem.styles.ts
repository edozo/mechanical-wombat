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

    &:after {
      content: '';
      transition: height 0.2s ease-out;
      height: 0px;
      width: 100%;
      ${p =>
        p.variant === 'Maps' &&
        css`
          background: ${p.theme.colors.aliases.primary};
        `} 
      ${p =>
        p.variant === 'Insight' &&
        css`
          background: #ff8955;
        `} 
      ${p =>
        p.variant === 'Occupiers' &&
        css`
          background: #7e0bc2;
        `} 
      ${p =>
        p.variant === 'Help centre' &&
        css`
          background: #2818f9;
        `} 
      position: absolute;
      bottom: 0;
      left: 0;
    }

    :hover {
      text-decoration: none;
      ${p =>
        p.variant === 'Maps' &&
        css`
          color: ${p.theme.colors.aliases.primary};
        `} 
      ${p =>
        p.variant === 'Insight' &&
        css`
          color: #ff8955;
        `} 
      ${p =>
        p.variant === 'Occupiers' &&
        css`
          color: #7e0bc2;
        `} 
      ${p =>
        p.variant === 'Help centre' &&
        css`
          color: #2818f9;
        `}
    }

    :hover:after {
      height: 6px;
    }
  }
`;
