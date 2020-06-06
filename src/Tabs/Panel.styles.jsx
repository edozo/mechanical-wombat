import styled from 'styled-components';

export const StyledPanel = styled.div`
  border: ${p => (p.isActive ? '3px dotted green' : '3px dotted red')};
`;
