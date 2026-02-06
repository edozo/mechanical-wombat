import styled, { css } from 'styled-components';
import { Context } from '../Header';

export const StyledMenuItem = styled.div.withConfig({
  shouldForwardProp: (prop: any) => prop !== 'appName',
})<Context>`
  > a {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.size.text.base};
    margin-left: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.grayDarker};

    &.active:after {
      height: 6px;
    }

    &:after {
      content: '';
      transition: height 0.2s ease-out;
      height: 0px;
      width: 100%;
      background: ${({ theme }) => theme.colors.aliases.primary};
      ${({ theme, appName }) =>
        appName === 'maps' &&
        css`
          background: ${theme.colors.aliases.primary};
        `}
      ${({ theme, appName }) =>
        appName === 'occupiers' &&
        css`
          background: ${theme.colors.appColors.occupiers};
        `}
      ${({ theme, appName }) =>
        appName === 'insight' &&
        css`
          background: ${theme.colors.appColors.insight};
        `}
      ${({ theme, appName }) =>
        appName === 'reports' &&
        css`
          background: ${theme.colors.appColors.reports};
        `}
      ${({ theme, appName }) =>
        appName === 'extract' &&
        css`
          background: ${theme.colors.appColors.extract};
        `}
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.aliases.primary};
      ${({ theme, appName }) =>
        appName === 'maps' &&
        css`
          color: ${theme.colors.aliases.primary};
        `}
      ${({ theme, appName }) =>
        appName === 'occupiers' &&
        css`
          color: ${theme.colors.appColors.occupiers};
        `}
      ${({ theme, appName }) =>
        appName === 'insight' &&
        css`
          color: ${theme.colors.appColors.insight};
        `}
      ${({ theme, appName }) =>
        appName === 'reports' &&
        css`
          color: ${theme.colors.appColors.reports};
        `}
      ${({ theme, appName }) =>
        appName === 'extract' &&
        css`
          color: ${theme.colors.appColors.extract};
        `}
    }

    &:hover:after {
      height: 6px;
    }
  }
`;
