import React from 'react';
import { StyledInputGroup } from './InputGroup.styles';
import { Item, ItemProps } from './Item';
import { Button, ButtonProps } from './Button';
import { Input } from './Input';
import { InputGroupContext, InputGroupState } from './InputGroupContext';
import { Textarea } from './Textarea';

interface ListComposition {
  Button: React.FC<ButtonProps>;
  Item: React.FC<ItemProps>;
  Input: React.FC;
  Textarea: React.FC;
}

const InputGroup: React.FC<InputGroupState> & ListComposition = props => (
  <InputGroupContext.Provider value={props}>
    <StyledInputGroup $border={props.border} radius={props.radius}>
      {props.children}
    </StyledInputGroup>
  </InputGroupContext.Provider>
);

InputGroup.defaultProps = {
  inputSize: 'standard',
  radius: 'standard',
  border: true,
  placeholder: '',
};

InputGroup.Button = Button;
InputGroup.Item = Item;
InputGroup.Input = Input;
InputGroup.Textarea = Textarea;

export { InputGroup };
