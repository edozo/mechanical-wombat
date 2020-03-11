/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Switch } from './Switch';

export const SwitchWrapper = ({ defaultToggleValue, small, disabled }) => {
  const [isChecked, setIsChecked] = useState(defaultToggleValue || false);
  return (
    <Switch
      currentValue={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      id="test"
      small={small}
      disabled={disabled}
    />
  );
};
