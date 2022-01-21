import styled from 'styled-components';
import { ButtonV2 } from '../ButtonV2';
import { Badge } from '../Badge';

export const StyledButton = styled(ButtonV2)`
  position: relative;
`;

export const StyledNewBadge = styled(Badge)`
  position: relative;
  background: #2818f9;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.spacing.xsmall};
  letter-spacing: 0.1em;
  font-weight: 800;
  top: -26px;
  right: 26px;
`;
