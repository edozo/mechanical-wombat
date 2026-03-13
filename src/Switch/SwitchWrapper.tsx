/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Switch } from './Switch';

export interface SwitchWrapperProps {
  defaultToggleValue: boolean;
  size?: 'small' | 'default';
  disabled: boolean;
  id: string;
  onText: string;
  offText: string;
}

export const SwitchWrapper: React.FC<SwitchWrapperProps> = ({
  defaultToggleValue,
  size = 'default',
  disabled,
  id,
  onText,
  offText,
}) => {
  const [isChecked, setIsChecked] = useState(defaultToggleValue || false);
  return (
    <Switch
      currentValue={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      id={id}
      size={size}
      disabled={disabled}
      onText={onText}
      offText={offText}
    />
  );
};
