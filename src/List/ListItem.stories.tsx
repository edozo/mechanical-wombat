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
  children: 'I am disabled',
};
