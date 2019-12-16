import * as React from 'react';
import { ListOption, PopoverList } from './Popover.styles';
import { useOnClickOutside } from '../Hooks';

const { useRef } = React;

export interface Props {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
  variant?: string;
  disabled?: boolean;
  children?: {
    label?: string;
    onClick?: () => void;
  }[];
}

export const Popover = (props: Props): JSX.Element => {
  const { children, disabled, variant, isOpen, setIsOpen } = props;
  const node = useRef(null);
  useOnClickOutside(node, () => setIsOpen(false));

  return (
    <>
      {isOpen && (
        <PopoverList ref={node}>
          {children &&
            children.map(option => {
              return (
                <ListOption key={option.label} disabled={disabled} variant={variant} onClick={option.onClick}>
                  <span>{option.label}</span>
                </ListOption>
              );
            })}
        </PopoverList>
      )}
    </>
  );
};
