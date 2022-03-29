import React from 'react';
import { useInputGroupContext } from '../InputGroupContext';
import { StyledTextarea } from './Textarea.styles';

export const Textarea: React.FC = () => {
  const { placeholder, size, id, value, onChange } = useInputGroupContext();

  return <StyledTextarea size={size} id={id} value={value} onChange={onChange} placeholder={placeholder} />;
};
