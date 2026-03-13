import styled from 'styled-components';

export const StyledPlatformMenu = styled.div`
  background: ${({ theme }) => theme.colors.grayLighter};
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.base} 0 ${({ theme }) => theme.spacing.base};
  margin-left: ${({ theme }) => theme.spacing.base};
  > * {
    margin-right: ${({ theme }) => theme.spacing.small};
  }
  > :last-child {
    margin-right: 0;
  }
`;
