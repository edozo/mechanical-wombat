import styled from 'styled-components';

interface PanelStyleProps {
  isActive: boolean;
}

export const StyledPanel = styled.div<PanelStyleProps>`
  display: flex;
  background: ${p => p.theme.colors.grayLight};
  flex: 1 1 0px;
`;
