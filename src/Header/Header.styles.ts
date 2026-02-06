import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  max-height: 60px;
  min-height: 60px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.xsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 ${({ theme }) => theme.spacing.base};
  z-index: 2;
  width: 100%;
  a {
    text-decoration: none;
  }
`;
