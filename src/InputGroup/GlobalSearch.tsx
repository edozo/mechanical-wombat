import React from 'react';
import { InputGroup } from './InputGroup';
import { SearchIcon } from '../Icons';

interface Props {
  value: string;
  placeholder: string;
  disabled: boolean;
  name: string;
  inputSize?: 'standard' | 'large';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const GlobalSearch: React.FC<Props> = ({
  value,
  placeholder,
  disabled,
  name,
  inputSize = 'large',
  onChange,
  reset,
}) => (
  <InputGroup
    border={false}
    inputSize={inputSize}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    name={name}
    onChange={onChange}
  >
    <InputGroup.Input />
    <InputGroup.Item>
      {value ? <InputGroup.Button onClick={reset}>&times;</InputGroup.Button> : <SearchIcon />}
    </InputGroup.Item>
  </InputGroup>
);
