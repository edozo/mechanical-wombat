import React from 'react';
import { useInputGroupContext } from '../InputGroup';
import { StyledInput } from './Input.styles';

export interface ItemProps {
  placeholder?: string;
}

export const Input: React.FC<ItemProps> = ({ placeholder = '' }) => {
  const { id, value, onChange } = useInputGroupContext();

  return <StyledInput id={id} value={value} onChange={onChange} placeholder={placeholder} />;
};
