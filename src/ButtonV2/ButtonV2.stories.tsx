import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonV2, ButtonV2Props } from './ButtonV2';

export default {
  title: 'Components/ButtonV2',
  component: ButtonV2,
} as Meta;

const Template: Story<ButtonV2Props> = args => <ButtonV2 {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
  disabled: false,
  variant: 'primary',
  size: 'standard',
  radius: 'standard',
  children: 'This is my button',
};
