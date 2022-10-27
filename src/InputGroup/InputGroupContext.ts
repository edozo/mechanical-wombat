import React, { createContext, useContext } from 'react';

export interface InputGroupState extends React.InputHTMLAttributes<HTMLInputElement> {
  radius?: 'standard' | 'round';
  inputSize?: 'standard' | 'large';
  border?: boolean;
}

const InputGroupContext = createContext<InputGroupState>({});

export const useInputGroupContext = (): any => {
  const context = useContext(InputGroupContext);
  if (!context) {
    throw new Error(`InputGroup compound components cannot be rendered outside the InputGroup component`);
  }
  return context;
};

export { InputGroupContext };
