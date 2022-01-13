import styled from 'styled-components/macro';

export const StyledInput = styled.input`
  flex: 1;
  border: 0;
  background: white;
  padding: 12px;
  border-top: ${p => `1px solid ${p.theme.colors.grayDark}`};
  border-bottom: ${p => `1px solid ${p.theme.colors.grayDark}`};
  :focus {
    outline: none;
  }
`;
