import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.grayLight};
  font-size: 16px;
  align-self: stretch;
  padding: 0 12px;
  border-radius: inherit;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;
