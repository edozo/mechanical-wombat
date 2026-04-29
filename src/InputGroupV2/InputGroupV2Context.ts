import { createContext, useContext } from 'react';

export interface InputGroupV2ContextValue {
  radius: 'standard' | 'round';
  inputSize: 'sm' | 'md';
  border: boolean;
}

const InputGroupV2Context = createContext<InputGroupV2ContextValue | null>(null);

export const useInputGroupV2Context = (): InputGroupV2ContextValue => {
  const context = useContext(InputGroupV2Context);
  if (!context) {
    throw new Error('InputGroupV2 sub-components must be rendered inside InputGroupV2');
  }
  return context;
};

export { InputGroupV2Context };
