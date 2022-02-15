import React from 'react';
import { InputGroup } from './InputGroup';
import { SearchIcon } from '../Icons';

interface Props {
  value: string;
  placeholder: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset?: () => void;
}

export const GlobalSearch: React.FC<Props> = props => (
  <InputGroup {...props}>
    <InputGroup.Input placeholder={props.placeholder} />
    <InputGroup.Item>
      {props.value ? <InputGroup.Button onClick={() => props.reset}>&times;</InputGroup.Button> : <SearchIcon />}
    </InputGroup.Item>
  </InputGroup>
);
