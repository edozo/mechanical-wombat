import styled from 'styled-components';
import { Badge } from '../Badge';

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledNewBadge = styled(Badge)`
  position: absolute;
  background: #2818f9;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.spacing.xsmall};
  letter-spacing: 0.1em;
  font-weight: 800;
  top: 0;
  right: 0;
`;
