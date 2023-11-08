import styled, { css } from 'styled-components';

interface StyledInputProps {
  $inputSize?: 'standard' | 'large';
}

export const StyledInput = styled.input<StyledInputProps>`
  flex: 1;
  border: 0;
  background: white;
  padding: ${p => p.theme.spacing.xxsmall};
  font-size: ${p => p.theme.font.size.text.base};
  line-height: ${p => p.theme.font.lineHeight.text.base};

  &:focus {
    outline: none;
  }

  ${p =>
    p.$inputSize === 'large' &&
    css`
      padding: ${p.theme.spacing.small};
    `}
`;
