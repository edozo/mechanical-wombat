import styled, { DefaultTheme } from 'styled-components';

export interface StyleProps {
  background?: keyof DefaultTheme['colors'] | string;
  size?: string;
  borderRadius?: keyof DefaultTheme['borderRadius'] | 'small';
  children?: React.ReactNode;
}

interface StyledDisplayBoxWrapperProps extends StyleProps {
  showBorder?: boolean;
}

export const StyledDisplayBox = styled.div<StyleProps>`
  margin: ${p => p.theme.spacing.small};
`;

const resolveColor = (theme: DefaultTheme, background?: string) => {
  if (!background) {
    return '#FF6600';
  }

  if (background in theme.colors) {
    return theme.colors[background as keyof DefaultTheme['colors']];
  }

  return background;
};

export const StyledDisplayBoxColor = styled.div<StyleProps>`
  background: ${p => resolveColor(p.theme, p.background)};
  border-radius: ${p => (p.borderRadius ? p.theme.borderRadius[p.borderRadius] : p.theme.borderRadius.small)};
  width: ${p => (p.size ? p.size : '100px')};
  height: ${p => (p.size ? p.size : '100px')};
  border: 1px solid ${p => p.theme.colors.gray};
`;

export const StyledDisplayBoxWrapper = styled.div<StyledDisplayBoxWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${p => p.theme.spacing.base};
  @media ${p => p.theme.minMedia.xl} {
    border: ${p => (p.showBorder !== false ? `2px dashed ${p.theme.colors.red}` : 'none')};
  }
`;

export const DisplayBoxTitle = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  color: ${p => p.theme.colors.grayDark};
`;
export const DisplayBoxSubTitle = styled.p`
  font-size: 8px;
  line-height: 11px;
  font-weight: bold;
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${p => p.theme.colors.grayDark};
  overflow-wrap: break-word;
  hyphens: auto;
`;
export const DisplayBoxBody = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: regular;
  color: ${p => p.theme.colors.grayDark};
  margin-top: 4px;
`;
