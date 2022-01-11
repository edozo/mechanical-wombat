import React, { createContext } from 'react';
import { StyledInputGroup } from './InputGroup.styles';
import { Item } from './Item';
import { Button } from './Button';
import { Input } from './Input';

export interface Context extends React.HTMLAttributes<HTMLInputElement> {
  radius?: 'standard' | 'round';
}

const InputGroupContext = createContext<Context>({ radius: 'standard' });

export const useInputGroupContext = (): any => {
  const context = React.useContext(InputGroupContext);
  if (!context) {
    throw new Error(`InputGroup compound components cannot be rendered outside the InputGroup component`);
  }
  return context;
};

const InputGroup = (props: Context): any => (
  <InputGroupContext.Provider value={props}>
    <StyledInputGroup radius={props.radius}>{props.children}</StyledInputGroup>
  </InputGroupContext.Provider>
);

InputGroup.defaultProps = {
  radius: 'standard',
};

InputGroup.Button = Button;
InputGroup.Item = Item;
InputGroup.Input = Input;

export { InputGroup };
