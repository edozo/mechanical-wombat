import styled, { DefaultTheme } from 'styled-components';

export interface StyleProps {
  background?: keyof DefaultTheme['colors'] | 'gray';
  size?: string;
  borderRadius?: keyof DefaultTheme['borderRadius'] | 'small';
  children?: React.ReactNode;
}

export const StyledDisplayBox = styled.div<StyleProps>`
  margin: ${({ theme }) => theme.spacing.small};
`;

export const StyledDisplayBoxColor = styled.div<StyleProps>`
  background: ${({ background, theme }) => (background ? theme.colors[background] : theme.colors.gray)};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? theme.borderRadius[borderRadius] : theme.borderRadius.small};
  width: ${({ size }) => (size ? size : '100px')};
  height: ${({ size }) => (size ? size : '100px')};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledDisplayBoxWrapper = styled.div<StyleProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.base};
  @media ${({ theme }) => theme.minMedia.xl} {
    border: 2px dashed red;
  }
`;

export const DisplayBoxTitle = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayDark};
`;
export const DisplayBoxSubTitle = styled.p`
  font-size: 8px;
  line-height: 11px;
  font-weight: bold;
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayDark};
  overflow-wrap: break-word;
  hyphens: auto;
`;
export const DisplayBoxBody = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: regular;
  color: ${({ theme }) => theme.colors.grayDark};
  margin-top: 4px;
`;
