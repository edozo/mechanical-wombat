import styled, { css } from 'styled-components';
import { InputGroupState } from '../InputGroupContext';

export const StyledInput = styled.input<InputGroupState>`
  flex: 1;
  border: 0;
  background: white;
  padding: ${p => p.theme.spacing.xxsmall};
  font-size: ${p => p.theme.font.size.text.base};
  line-height: ${p => p.theme.font.lineHeight.text.base};

  :focus {
    outline: none;
  }

  ${p =>
    p.size === 'large' &&
    css`
      padding: ${p.theme.spacing.small};
    `}
`;
