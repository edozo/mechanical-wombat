import styled from 'styled-components/macro';

export interface StyleProps {
  readonly background?: string;
  readonly size?: string;
  readonly borderRadius?: string;
  children?: React.ReactNode;
}

export const StyledDisplayBox = styled.div<StyleProps>`
  margin: ${p => p.theme.spacing.small};
`;

export const StyledDisplayBoxColor = styled.div<StyleProps>`
  background: ${p => (p.background ? p.theme.colors[p.background] : p.theme.colors.gray)};
  border-radius: ${p => (p.borderRadius ? p.theme.borderRadius[p.borderRadius] : p.theme.borderRadius.small)};
  width: ${p => (p.size ? p.size : '100px')};
  height: ${p => (p.size ? p.size : '100px')};
  border: 1px solid ${p => p.theme.colors.gray};
`;

export const StyledDisplayBoxWrapper = styled.div<StyleProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${p => p.theme.spacing.base};
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
`;
export const DisplayBoxBody = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: regular;
  color: ${p => p.theme.colors.grayDark};
  margin-top: 4px;
`;
