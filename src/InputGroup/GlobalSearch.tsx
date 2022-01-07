import React from 'react';
import styled from 'styled-components/macro';
import { InputGroup } from './InputGroup';
import { SearchIcon } from '../Icons';

interface Props {
  value: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset?: () => void;
}

const IconWrapper = styled.div`
  margin-top: 12px;
  margin-right: 8px;
  svg {
    width: ${p => p.theme.icons.small};
    height: ${p => p.theme.icons.small};
  }
`;

const CancelButton = styled.button`
  border: none;
  background: ${p => p.theme.colors.white};
  font-size: 16px;
`;

const CancelWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 8px;
  :hover {
    background: ${p => p.theme.colors.grayLighter};
    button {
      background: ${p => p.theme.colors.grayLighter};
      color: ${p => p.theme.colors.grayDark};
    }
  }
`;

export const GlobalSearch: React.FC<Props> = props => (
  <InputGroup placeholder="Search by Plan name or Address" {...props}>
    <InputGroup.Input />
    <InputGroup.Item>
      {props.value ? (
        <CancelWrapper>
          <CancelButton onClick={props.reset} type="button">
            &times;
          </CancelButton>
        </CancelWrapper>
      ) : (
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      )}
    </InputGroup.Item>
  </InputGroup>
);
