import React from 'react';
import { StyledInputGroup } from './InputGroup.styles';
import { Item, ItemProps } from './Item';
import { Button, ButtonProps } from './Button';
import { Input, InputProps } from './Input';
import { InputGroupContext, InputGroupState } from './InputGroupContext';

interface ListComposition {
  Button: React.FC<ButtonProps>;
  Item: React.FC<ItemProps>;
  Input: React.FC<InputProps>;
}

const InputGroup: React.FC<InputGroupState> & ListComposition = props => (
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
