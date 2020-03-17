import React from 'react';
import { Checkbox, Label, Toggle, ToggleInner, SwitchParent } from './Switch.styles';

type Props = {
  disabled?: boolean;
  id: string;
  currentValue: boolean;
  small: boolean;
  onChange: () => void;
  onText?: string;
  offText?: string;
};

export const Switch: React.FC<Props> = ({ disabled, id, currentValue, small, onChange, onText, offText }) => {
  return (
    <SwitchParent small={small}>
      <Checkbox type="checkbox" id={id} checked={currentValue} onChange={onChange} disabled={disabled} />
      <Label htmlFor={id}>
        <ToggleInner data-yes={onText} data-no={offText} small={small} />
        <Toggle disabled={disabled} small={small} />
      </Label>
    </SwitchParent>
  );
};
