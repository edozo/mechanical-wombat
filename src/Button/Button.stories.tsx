import * as React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const FakeButton = (): JSX.Element => {
  const label = 'Colors';
  const options = {
    Primary: 'primary',
    Secondary: 'secondary',
  };
  const defaultValue = 'primary';

  const value = select(label, options, defaultValue);
  return <Button variant={value} disabled={boolean('Disabled', false)} text={text('Label', 'Hello Storybook')} />;
};
