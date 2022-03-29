import React from 'react';
import { useInputGroupContext } from '../InputGroupContext';
import { StyledInput } from './Input.styles';

export const Input: React.FC = () => {
  const { placeholder, size, id, value, onChange } = useInputGroupContext();

  return <StyledInput size={size} id={id} value={value} onChange={onChange} placeholder={placeholder} />;
};
