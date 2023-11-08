import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background: ${p => p.theme.colors.grayLight};
  font-size: 16px;
  align-self: stretch;
  padding: 0 12px;
  border-radius: inherit;

  &:hover {
    background: ${p => p.theme.colors.gray};
  }
`;
