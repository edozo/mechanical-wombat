import styled, { css } from 'styled-components';

interface StyledInputGroupProps {
  $border?: boolean;
  $radius?: 'standard' | 'round';
}

export const StyledInputGroup = styled.div<StyledInputGroupProps>`
  display: flex;
  width: 100%;
  border: ${({ theme, $border }) => $border && `1px solid ${theme.colors.grayDark}`};
  background: white;
  overflow: auto;
  ${({ $radius }) =>
    $radius === 'standard' &&
    css`
      border-radius: 6px;
    `}
  ${({ $radius }) =>
    $radius === 'round' &&
    css`
      border-radius: 50px;
    `};
`;
