import * as React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const FakeButton1 = (): JSX.Element => (
  <Button>
    <span>das</span>
  </Button>
);

export const FakeButton2 = (): JSX.Element => <Button color="secondary">das</Button>;
