import styled from 'styled-components/macro';

export interface ItemProps {
  readonly backgroundColor?: string;
}

export const StyledItem = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.backgroundColor || 'white'}; // take me form a prop - default to white
  border-top: ${p => `1px solid ${p.theme.colors.grayDark}`};
  border-bottom: ${p => `1px solid ${p.theme.colors.grayDark}`};
  svg {
    margin: 0 8px;
    width: ${p => p.theme.icons.small};
    height: ${p => p.theme.icons.small};
  }
`;
