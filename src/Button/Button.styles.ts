import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid ${props => props.theme.colors.green};
  border-radius: 50px;
  font-size: 1.2em;
  padding: 8px 24px;
  transition: all 0.2s;
  box-sizing: border-box;
  color: ${props => props.theme.colors.skyBlue};
  :hover {
    background: ${props => props.theme.colors.skyBlue};
    color: #fff;
  }
  :focus {
    outline: none;
    opacity: 0.7;
    transform: scale(1.05);
  }
`;
