import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Fake button', module).add('Fake button', () => (
  <Button text="I am not a real button, I will need to be replace with the real button" />
));
