import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid ${p => p.theme.colors.aliases.primary};
  border-radius: 50px;
  font-size: 1.2em;
  padding: 8px 24px;
  transition: all 0.2s;
  box-sizing: border-box;
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.aliases.primary};
  :hover {
    background: ${p => p.theme.colors.aliases.primaryLight};
    border: 2px solid ${p => p.theme.colors.aliases.primaryLight};
    color: #fff;
  }
  :focus {
    background: ${p => p.theme.colors.aliases.primaryLight};
    border: 2px solid ${p => p.theme.colors.aliases.primaryDark};
    outline: none;
  }
  :active {
    background: ${p => p.theme.colors.aliases.primaryDark};
    border: 2px solid ${p => p.theme.colors.aliases.primaryDark};
    outline: none;
  }
`;
