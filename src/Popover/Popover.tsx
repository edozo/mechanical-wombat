import * as React from 'react';
import { ListOption, PopoverList } from './Popover.styles';

export interface Props {
  variant?: string;
  disabled?: boolean;
  children?: {
    label?: string;
    onClick?: () => void;
  }[];
}

export const Popover = (props: Props): JSX.Element => {
  const { children, disabled, variant } = props;
  return (
    <PopoverList>
      {children &&
        children.map(option => {
          return (
            <ListOption key={option.label} disabled={disabled} variant={variant} onClick={option.onClick}>
              <span>{option.label}</span>
            </ListOption>
          );
        })}
    </PopoverList>
  );
};
