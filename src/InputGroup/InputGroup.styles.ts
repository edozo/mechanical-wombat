import styled, { css } from 'styled-components';
import { InputGroupState } from './InputGroupContext';

export const StyledInputGroup = styled.div<InputGroupState>`
  display: flex;
  width: 100%;
  > * :first-child {
    border-left: ${p => `1px solid ${p.theme.colors.grayDark}`};
    ${p =>
      p.radius === 'standard' &&
      css`
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      `}
    ${p =>
      p.radius === 'round' &&
      css`
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      `};
  }
  > * :last-child {
    border-right: ${p => `1px solid ${p.theme.colors.grayDark}`};
    ${p =>
      p.radius === 'standard' &&
      css`
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      `}
    ${p =>
      p.radius === 'round' &&
      css`
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      `}
  }
`;
