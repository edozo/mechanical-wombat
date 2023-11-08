import React from 'react';
import { useInputGroupContext } from '../InputGroupContext';
import { StyledInput } from './Input.styles';

export const Input: React.FC = () => {
  const { placeholder, inputSize, id, value, onChange, type, min, max, step } = useInputGroupContext();

  return (
    <StyledInput
      type={type}
      min={min}
      max={max}
      step={step}
      $inputSize={inputSize}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
