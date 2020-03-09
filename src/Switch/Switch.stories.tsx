import * as React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const defaultOff = (): JSX.Element => {
  const [isChecked, setIsChecked] = React.useState(false);
  return <Switch checked={isChecked} handleToggle={() => setIsChecked(!isChecked)} activeColor="red" />;
};

export const defaultOn = (): JSX.Element => {
  const [isChecked, setIsChecked] = React.useState(true);
  return <Switch checked={isChecked} handleToggle={() => setIsChecked(!isChecked)} activeColor="blue" />;
};
