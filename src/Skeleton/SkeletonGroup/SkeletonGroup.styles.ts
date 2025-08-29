import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';

export const StyledSkeletonGroup = styled.div<{
  $gap?: keyof DefaultTheme['spacing'];
}>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[props.$gap || 'xsmall']};
`;
