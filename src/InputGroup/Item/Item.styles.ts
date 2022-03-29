import styled from 'styled-components';
import { ItemProps } from './Item';

export const StyledItem = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-color: ${p => p.backgroundColor};
  svg {
    margin: 0 8px;
    width: ${p => p.theme.icons.small};
    height: ${p => p.theme.icons.small};
  }
`;
