import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SwitchWrapper, SwitchWrapperProps } from './SwitchWrapper';

export default {
  title: 'Components/Switch',
  argTypes: { onChange: { action: 'changed' } },
  component: SwitchWrapper,
} as Meta;

// TODO this one does not work currently
const Template: Story<SwitchWrapperProps> = args => <SwitchWrapper {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
  defaultToggleValue: true,
  size: 'small',
  offText: 'off',
  onText: 'on',
  disabled: false,
};
