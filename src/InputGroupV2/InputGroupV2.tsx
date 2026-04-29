import { forwardRef, useMemo } from 'react';
import {
  StyledButtonV2,
  StyledInputGroupV2,
  StyledInputV2,
  StyledItemV2,
  StyledTextareaV2,
} from 'InputGroupV2/InputGroupV2.styles';
import {
  InputGroupV2Context,
  InputGroupV2ContextValue,
  useInputGroupV2Context,
} from 'InputGroupV2/InputGroupV2Context';

export interface InputGroupV2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Border radius style of the group. */
  radius?: 'standard' | 'round';
  /** Padding scale applied to Input and Textarea sub-components. */
  inputSize?: 'sm' | 'md';
  /** Renders a border around the group. */
  border?: boolean;
}

export type InputGroupV2InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type InputGroupV2TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputGroupV2ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface InputGroupV2ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Override background colour of the item slot. */
  backgroundColor?: string;
}

const InputGroupV2Root = forwardRef<HTMLDivElement, InputGroupV2Props>(
  ({ radius = 'standard', inputSize = 'sm', border = true, children, ...rest }, ref) => {
    const contextValue: InputGroupV2ContextValue = useMemo(
      () => ({ radius, inputSize, border }),
      [radius, inputSize, border],
    );

    return (
      <InputGroupV2Context.Provider value={contextValue}>
        <StyledInputGroupV2 ref={ref} $border={border} $radius={radius} {...rest}>
          {children}
        </StyledInputGroupV2>
      </InputGroupV2Context.Provider>
    );
  },
);
InputGroupV2Root.displayName = 'InputGroupV2';

const InputGroupV2Input = forwardRef<HTMLInputElement, InputGroupV2InputProps>((props, ref) => {
  const { inputSize } = useInputGroupV2Context();
  return <StyledInputV2 ref={ref} $inputSize={inputSize} {...props} />;
});
InputGroupV2Input.displayName = 'InputGroupV2.Input';

const InputGroupV2Textarea = forwardRef<HTMLTextAreaElement, InputGroupV2TextareaProps>((props, ref) => {
  const { inputSize } = useInputGroupV2Context();
  return <StyledTextareaV2 ref={ref} $inputSize={inputSize} {...props} />;
});
InputGroupV2Textarea.displayName = 'InputGroupV2.Textarea';

const InputGroupV2Button = forwardRef<HTMLButtonElement, InputGroupV2ButtonProps>((props, ref) => (
  <StyledButtonV2 ref={ref} type="button" {...props} />
));
InputGroupV2Button.displayName = 'InputGroupV2.Button';

const InputGroupV2Item = forwardRef<HTMLDivElement, InputGroupV2ItemProps>(({ backgroundColor, ...rest }, ref) => (
  <StyledItemV2 ref={ref} $backgroundColor={backgroundColor} {...rest} />
));
InputGroupV2Item.displayName = 'InputGroupV2.Item';

export const InputGroupV2 = Object.assign(InputGroupV2Root, {
  Input: InputGroupV2Input,
  Textarea: InputGroupV2Textarea,
  Button: InputGroupV2Button,
  Item: InputGroupV2Item,
});
