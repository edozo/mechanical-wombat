import styled from 'styled-components';
import { ListState } from './ListContext';

export const StyledList = styled.div<ListState>`
  background-color: ${p => p.theme.colors.white};
  border-radius: inherit;
`;
