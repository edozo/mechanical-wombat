/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Switch } from './Switch';

export const SwitchWrapper = ({ defaultToggleValue, size, disabled, id, onText, offText }) => {
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
