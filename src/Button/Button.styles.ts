import styled from 'styled-components'

export const StyledButton = styled.button`
  border: 2px solid rgba(255, 102, 0, 1);
  border-radius: 50px;
  font-size: 1.2em;
  padding: 8px 24px;
  transition: all 0.2s;
  box-sizing: border-box;
  color: rgba(255, 102, 0, 1);
  :hover {
    border: 2px solid rgba(255, 102, 0, 0.5);
    background: rgba(255, 102, 0, 1);
    color: #fff;
  }
  :focus {
    outline: none;
    background: rgba(255, 102, 0, 0.2);
  }
`