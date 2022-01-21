import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonWithBadge } from './ButtonWithBadge';

export default {
  title: 'Components/ButtonWithBadge',
  component: ButtonWithBadge,
} as Meta;

const Template: Story = args => <ButtonWithBadge {...args} />;

export const WithBadge = Template.bind({});
WithBadge.args = {
  badge: 'NEW',
  children: 'This is my new button',
};
