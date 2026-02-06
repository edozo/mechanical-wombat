import styled from 'styled-components';
import { ItemProps } from './Item';

export const StyledItem = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-color: ${({ backgroundColor }) => backgroundColor};
  svg {
    margin: 0 8px;
    width: ${({ theme }) => theme.icons.small};
    height: ${({ theme }) => theme.icons.small};
  }
`;
