import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
    background: { control: 'color' },
  },
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'grayLighter',
  background: 'primary',
  children: 'Theme',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'grayLighter',
  background: 'secondary',
  children: 'Theme',
};

export const RandomHex = Template.bind({});
RandomHex.args = {
  color: '#ff0',
  background: '#f60',
  children: 'Random',
};

export const RandomNamed = Template.bind({});
RandomNamed.args = {
  color: 'dodgerblue',
  background: 'greenyellow',
  children: 'Random',
};
