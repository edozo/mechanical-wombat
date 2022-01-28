import styled from 'styled-components';
import { Context } from './ListGroup';

export interface StyleProps extends Context {
  radius?: 'small' | 'standard';
}

export const StyledList = styled.div<StyleProps>`
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius[p.radius || 'standard']};
  > div {
    border-radius: ${p => p.theme.borderRadius[p.radius || 'standard']};
  }

  :not(:first-child) {
    border-radius: 0;
  }
`;
