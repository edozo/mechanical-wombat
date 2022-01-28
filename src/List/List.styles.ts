import styled from 'styled-components';
import { Context } from './List';

export const StyledList = styled.div<Context>`
  background-color: ${p => p.theme.colors.white};
  border-radius: inherit;
`;
