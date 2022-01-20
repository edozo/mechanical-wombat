import styled, { css } from 'styled-components';

export interface StyleProps {
  radius?: 'small' | 'standard';
  platform?: true | false;
}

export const StyledList = styled.div<StyleProps>`
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius[p.radius || 'standard']};
  > div {
    border-radius: ${p => p.theme.borderRadius[p.radius || 'standard']};
  }
  > div {
    ${p =>
      p.platform &&
      css`
        border-radius: 0;
      `};
  }

  :not(:first-child) {
    border-radius: 0;
  }
`;
