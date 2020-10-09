import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
  disabled: false,
  color: 'primary',
  variant: 'standard',
  borderRadius: 'small',
  children: 'This is my button',
};
