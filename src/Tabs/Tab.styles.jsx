import styled from 'styled-components';

export const StyledTab = styled.span`
  border: ${p => (p.isActive ? '3px dotted green' : '3px dotted red')};
`;
