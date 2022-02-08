import React from 'react';
import { useInputGroupContext } from '../InputGroupContext';
import { StyledInput } from './Input.styles';

export interface InputProps {
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder = '' }) => {
  const { id, value, onChange } = useInputGroupContext();

  return <StyledInput id={id} value={value} onChange={onChange} placeholder={placeholder} />;
};
