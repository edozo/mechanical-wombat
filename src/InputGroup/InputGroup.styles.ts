import styled, { css } from 'styled-components';

interface StyledInputGroupProps {
  $border?: boolean;
  radius?: 'standard' | 'round';
}

export const StyledInputGroup = styled.div<StyledInputGroupProps>`
  display: flex;
  width: 100%;
  border: ${p => p.$border && `1px solid ${p.theme.colors.grayDark}`};
  background: white;
  overflow: auto;
  ${p =>
    p.radius === 'standard' &&
    css`
      border-radius: 6px;
    `}
  ${p =>
    p.radius === 'round' &&
    css`
      border-radius: 50px;
    `};
`;
