import styled, { css } from 'styled-components';

interface StyledInputProps {
  $inputSize?: 'standard' | 'large';
}

export const StyledInput = styled.input<StyledInputProps>`
  flex: 1;
  border: 0;
  background: white;
  padding: ${({ theme }) => theme.spacing.xxsmall};
  font-size: ${({ theme }) => theme.font.size.text.base};
  line-height: ${({ theme }) => theme.font.lineHeight.text.base};

  &:focus {
    outline: none;
  }

  ${({ theme, $inputSize }) =>
    $inputSize === 'large' &&
    css`
      padding: ${theme.spacing.small};
    `}
`;
