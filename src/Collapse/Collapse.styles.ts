import styled from 'styled-components';

export const CollapseWrapper = styled.div`
  margin-bottom: ${p => p.theme.spacing.small};
`;

export const StyledCollapse = styled.div`
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius.small};
`;

export const StyledTrigger = styled.button`
  padding: ${p => p.theme.spacing.xsmall};
  background: transparent;
  border: none;
  text-align: left;
  font-family: ${p => p.theme.font.family.secondary};
  font-weight: ${p => p.theme.font.weight.semibold};
  display: block;
  cursor: pointer;
`;

export const StyledPanel = styled.div`
  margin: ${p => p.theme.spacing.xsmall};
`;
