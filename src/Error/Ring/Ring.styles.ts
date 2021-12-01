import styled from 'styled-components';
import { rgba } from 'polished';
import { Props } from './Ring';

export const StyledRing = styled.div<Props>`
  display: flex;
  border-radius: 50%;
  background-color: ${p => rgba(p.theme.colors.skyBlueLighter, p.opacity)};
  padding: ${p => p.padding};
  > div > svg {
    margin: 30px;
    width: 175px;
    height: 175px;
    display: flex;
  }
`;
