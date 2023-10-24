import styled from 'styled-components';
import { ButtonV2 } from '../../ButtonV2';

export const StyledButtonTitle = styled.div`
  font-family: ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.text.base};
  line-height: ${p => p.theme.font.lineHeight.text.base};
  font-weight: ${p => p.theme.font.weight.bold};
  color: #060048;
  margin-left: ${p => p.theme.spacing.xsmall};
`;

export const StyledText = styled.span`
  font-family: ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.text.xsmall};
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 134px auto;
  align-items: center;
  margin: ${p => p.theme.spacing.xsmall};
  min-height: 34px;
`;

export const StyledButtonV2 = styled(ButtonV2)`
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
`;
