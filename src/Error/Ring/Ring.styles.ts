import styled from 'styled-components';
import { rgba } from 'polished';
import { Props } from './Ring';

export const StyledRing = styled.div<Props>`
  display: flex;
  border-radius: 50%;
  background-color: ${({ theme, opacity }) => rgba(theme.colors.skyBlueLighter, opacity)};
  padding: ${({ padding }) => padding};
  > div > svg {
    margin: 30px;
    width: 175px;
    height: 175px;
    display: flex;
  }
`;
