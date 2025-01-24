import React from 'react';
import { Checkbox, Label, Toggle, ToggleInner, SwitchParent } from './Switch.styles';

export interface Props {
  disabled?: boolean;
  id: string;
  currentValue: boolean;
  size?: 'small' | 'default';
  onChange: () => void;
  onText?: string;
  offText?: string;
}

export const Switch: React.FC<Props> = ({
  disabled,
  id,
  currentValue,
  size = 'default',
  onChange,
  onText,
  offText,
}) => (
  <SwitchParent size={size}>
    <Checkbox data-testid={id} type="checkbox" id={id} checked={currentValue} onChange={onChange} disabled={disabled} />
    <Label htmlFor={id}>
      <ToggleInner data-yes={onText} data-no={offText} size={size} />
      <Toggle disabled={disabled} size={size} role="checkbox" />
    </Label>
  </SwitchParent>
);
