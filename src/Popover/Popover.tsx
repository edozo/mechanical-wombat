import * as React from 'react';
import { ListOption, PopoverList } from './Popover.styles';

export interface Props {
  options: {
    label: string;
  }[];
  variant?: string;
  disabled?: boolean;
}

export const Popover = (props: Props): JSX.Element => {
  const { options, disabled, variant } = props;
  return (
    <PopoverList>
      {options.map(option => {
        return (
          <ListOption key={option.label} disabled={disabled} variant={variant}>
            <span>{option.label}</span>
          </ListOption>
        );
      })}
    </PopoverList>
  );
};
