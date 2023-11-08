import React from 'react';
import { useInputGroupContext } from '../InputGroupContext';
import { StyledTextarea } from './Textarea.styles';

export const Textarea: React.FC = () => {
  const { placeholder, inputSize, id, value, onChange } = useInputGroupContext();

  return <StyledTextarea $inputSize={inputSize} id={id} value={value} onChange={onChange} placeholder={placeholder} />;
};
