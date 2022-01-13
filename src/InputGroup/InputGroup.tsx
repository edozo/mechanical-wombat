import React, { createContext } from 'react';
import { StyledInput, StyledInputGroup, StyledItem } from './InputGroup.styles';

export interface Context extends React.HTMLAttributes<HTMLInputElement> {
  radius?: 'standard' | 'round';
}

const InputGroupContext = createContext<Context>({ radius: 'standard' });

const useInputGroupContext = (): any => {
  const context = React.useContext(InputGroupContext);
  if (!context) {
    throw new Error(`InputGroup compound components cannot be rendered outside the InputGroup component`);
  }
  return context;
};

const InputGroup = (props: Context): any => {
  return (
    <InputGroupContext.Provider value={props}>
      <StyledInputGroup radius={props.radius}>{props.children}</StyledInputGroup>
    </InputGroupContext.Provider>
  );
};

InputGroup.defaultProps = {
  radius: 'standard',
};

const Input: React.FC = () => {
  const { id, value, onChange, placeholder } = useInputGroupContext();
  return <StyledInput id={id} value={value} onChange={onChange} placeholder={placeholder} />;
};

const Item: React.FC = ({ children }) => {
  return <StyledItem>{children}</StyledItem>;
};

InputGroup.Item = Item;
InputGroup.Input = Input;

export { InputGroup };
