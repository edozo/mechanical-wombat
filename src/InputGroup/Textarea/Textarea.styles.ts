import styled, { css } from 'styled-components';
import { InputGroupState } from '../InputGroupContext';

export const StyledTextarea = styled.textarea<InputGroupState>`
  flex: 1;
  border: 0;
  background: white;
  padding: 4px;
  font-size: ${p => p.theme.font.size.text.base};
  line-height: ${p => p.theme.font.lineHeight.text.base};

  ${p =>
      p.size === 'large' &&
      css`
        padding: 16px;
      `}
    :focus {
    outline: none;
  }
`;
