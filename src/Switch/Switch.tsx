import React from 'react';
import { Checkbox, Label, Toggle, ToggleInner, SwitchParent } from './Switch.styles';

type Props = {
  disabled?: boolean;
  id: string;
  currentValue: boolean;
  small: boolean;
  onChange: () => void;
};

export const Switch: React.FC<Props> = ({ disabled, id, currentValue, small, onChange }) => {
  return (
    <SwitchParent small={small}>
      <Checkbox type="checkbox" id={id} checked={currentValue} onChange={onChange} disabled={disabled} />
      {id && (
        <Label htmlFor={id}>
          <ToggleInner data-yes="yes" data-no="no" small={small} />
          <Toggle disabled={disabled} small={small} />
        </Label>
      )}
    </SwitchParent>
  );
};
