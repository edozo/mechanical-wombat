import styled from 'styled-components';

export const ProductName = styled.span`
  color: ${p => p.theme.colors.aliases.primary};
  font-size: ${p => p.theme.font.size.text.xlarge};
  font-weight: ${p => p.theme.font.weight.semibold};
  font-family: ${p => p.theme.font.family.main};
  margin-left: ${p => p.theme.spacing.xsmall};
`;
