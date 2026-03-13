import styled from 'styled-components';

export const StyledHeaderV2 = styled.div`
  position: sticky;
  top: 0;
  max-height: 60px;
  min-height: 60px;
  background: ${({ theme }) => theme.colors.neutral[50]};
  box-shadow: ${({ theme }) => theme.boxShadow.xsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  z-index: 2;
  width: 100%;
`;
