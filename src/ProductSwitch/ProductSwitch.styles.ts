import styled from 'styled-components';
import { Badge } from '../Badge';

export const StyledButtonTitle = styled.div`
  font-family: ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.text.base};
  line-height: ${p => p.theme.font.lineHeight.text.base};
  font-weight: ${p => p.theme.font.weight.bold};
  color: #060048;
  margin-left: ${p => p.theme.spacing.small};
`;

export const StyledText = styled.span`
  font-family: ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.text.xsmall};
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  align-items: center;
  svg {
    height: 22px;
    margin-left: -25px;
  }
`;

export const SwitchAppWrapper = styled.div`
  display: grid;
  grid-template-columns: 10px auto;
  svg {
    margin-top: 4px;
    margin-left: -6px;
  }
`;

export const StyledNewBadge = styled(Badge)`
  font-size: ${p => p.theme.spacing.xsmall};
  letter-spacing: 0.1em;
  font-weight: 800;
`;
