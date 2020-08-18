import styled from 'styled-components/macro';

export interface StyleProps {
  radius?: 'small' | 'standard';
}

export const StyledList = styled.div<StyleProps>`
  border-radius: ${p => p.theme.borderRadius[p.radius || 'standard']};
  background-color: ${p => p.theme.colors.white};
  > :first-child {
    border-radius: ${p => p.theme.borderRadius[p.radius || 'standard']}
      ${p => p.theme.borderRadius[p.radius || 'standard']} 0 0;
  }
  > :last-child {
    border-radius: 0 0 ${p => p.theme.borderRadius[p.radius || 'standard']}
      ${p => p.theme.borderRadius[p.radius || 'standard']};
  }
`;
