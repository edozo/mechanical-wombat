import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module).add('Dummy setup', () => <Button text="I am a story" />);
