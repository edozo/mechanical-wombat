import * as React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const FakeButton1 = (): JSX.Element => (
  <Button>
    <span role="img" aria-label="An Emoji">
      😜
    </span>
    Emoji
  </Button>
);

export const FakeButton2 = (): JSX.Element => {
  const color: any = select(
    'Colors',
    {
      Primary: 'primary',
      Secondary: 'secondary',
    },
    'primary',
  );
  const variant: any = select(
    'Variant',
    {
      Standard: 'standard',
      Outline: 'outline',
      Ghost: 'ghost',
    },
    'primary',
  );
  const radius: any = select(
    'Radius',
    {
      Small: 'small',
      Standard: 'standard',
      Large: 'large',
    },
    'standard',
  );
  const disabled: any = boolean('Disabled', false);
  const buttonText: any = text('Text', 'Hello Storybook');
  return (
    <Button color={color} variant={variant} radius={radius} disabled={disabled}>
      {buttonText}
    </Button>
  );
};
