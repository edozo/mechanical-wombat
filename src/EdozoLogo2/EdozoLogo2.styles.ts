import styled from 'styled-components';

export const BetaBadge = styled.span`
  font-size: ${p => p.theme.font.size.text.small};
  background: ${p => p.theme.colors.gray};
  padding: 0 ${p => p.theme.spacing.xxsmall};
  border-radius: ${p => p.theme.borderRadius.small};
  align-self: flex-end;
  margin-left: ${p => p.theme.spacing.xsmall};
  color: ${p => p.theme.colors.grayDarker};
`;
