import styled, { css } from 'styled-components';

interface StyledTextareaProps {
  $inputSize?: 'standard' | 'large';
}

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
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
