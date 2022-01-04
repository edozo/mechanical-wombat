import styled from 'styled-components/macro';
import { searchUrl } from '../../Icons';

export const SearchInput = styled.input`
  padding: 16px 32px 16px 16px;
  width: 100%;
  outline: none;
  border: none;
  color: #444;
  line-height: 1.3;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: ${p => p.theme.colors.white};
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 1em auto, 100%;
  background-image: url(${searchUrl});
  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const SearchInputWrapper = styled.div`
  max-width: 440px;
  position: relative;
  button {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    border: none;
    background: ${p => p.theme.colors.white};
    :hover {
      background: ${p => p.theme.colors.grayLighter};
      color: ${p => p.theme.colors.grayDark};
    }
  }
`;
