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

const defaultProps: InputGroupState = {
  inputSize: 'standard',
  radius: 'standard',
  border: true,
  placeholder: '',
};

const InputGroup: React.FC<InputGroupState> & ListComposition = props => {
  const mergedProps = { ...defaultProps, ...props };

  return (
    <InputGroupContext.Provider value={mergedProps}>
      <StyledInputGroup $border={mergedProps.border} $radius={mergedProps.radius}>
        {mergedProps.children}
      </StyledInputGroup>
    </InputGroupContext.Provider>
  );
};

InputGroup.Button = Button;
InputGroup.Item = Item;
InputGroup.Input = Input;
InputGroup.Textarea = Textarea;

export { InputGroup };
