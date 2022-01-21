import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ListItem } from '.';

export default {
  title: 'Components/ListItem',
  argTypes: { onClick: { action: 'clicked' } },
  component: ListItem,
} as Meta;

const Template: Story = args => <ListItem {...args} />;

export const ControlledListItem = Template.bind({});
ControlledListItem.args = {
  disabled: false,
  variant: 'menu',
  children: 'This is a list item',
};
ControlledListItem.parameters = {
  backgrounds: {
    default: 'orange',
  },
};

export const DisabledListItem = Template.bind({});
DisabledListItem.args = {
  disabled: true,
  variant: 'menu',
  children: 'I am disabled',
};

export const ControlledPlatformListItem = Template.bind({});
ControlledPlatformListItem.args = {
  disabled: false,
  variant: 'platform',
  children: 'This is a platform list item',
};

export const DisabledPlatformListItem = Template.bind({});
DisabledPlatformListItem.args = {
  disabled: true,
  variant: 'platform',
  children: 'I am a disabled platform list item',
};
