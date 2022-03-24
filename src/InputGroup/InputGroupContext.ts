import React, { createContext, useContext } from 'react';

export interface InputGroupState extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  radius?: 'standard' | 'round';
  placeholder?: string;
  size?: 'standard' | 'large';
  border?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroupContext = createContext<InputGroupState>({
  value: '',
  onChange: () => null,
});

export const useInputGroupContext = (): any => {
  const context = useContext(InputGroupContext);
  if (!context) {
    throw new Error(`InputGroup compound components cannot be rendered outside the InputGroup component`);
  }
  return context;
};

export { InputGroupContext };
