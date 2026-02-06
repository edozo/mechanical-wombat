import styled from 'styled-components';

export const CollapseWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const StyledCollapse = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const StyledTrigger = styled.button`
  padding: ${({ theme }) => theme.spacing.xsmall};
  background: transparent;
  border: none;
  text-align: left;
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  display: block;
  cursor: pointer;
`;

export const StyledPanel = styled.div`
  margin: ${({ theme }) => theme.spacing.xsmall};
`;
