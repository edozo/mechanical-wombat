import styled, { css } from 'styled-components/macro';
import { Context } from './InputGroup';

export const StyledInputGroup = styled.div<Context>`
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
      `}
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

export const StyledInput = styled.input`
  flex: 1;
  border: 0;
  background: white;
  padding: 12px;
  border-top: ${p => `1px solid ${p.theme.colors.grayDark}`};
  border-bottom: ${p => `1px solid ${p.theme.colors.grayDark}`};
  :focus {
    outline: none;
  }
`;

export const StyledItem = styled.div`
  padding-right: 4px;
  background: white;
  border-top: ${p => `1px solid ${p.theme.colors.grayDark}`};
  border-bottom: ${p => `1px solid ${p.theme.colors.grayDark}`};
`;
