import React from 'react';
import { Story, Meta } from '@storybook/react';
import { List } from './List';

export default {
  title: 'Components/List',
  component: List,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    backgrounds: {
      default: 'orange',
    },
  },
} as Meta;

const Template: Story = ({ children, ...args }) => (
  <List {...args}>
    {children.map((child: React.ReactNode) => (
      <List.Item key={Math.random()}>{child}</List.Item>
    ))}
  </List>
);

export const Controlled = Template.bind({});
Controlled.args = {
  disabled: false,
  children: ['First', 'Second', 'Third'],
};

export const ControlledListItem = Template.bind({});
ControlledListItem.args = {
  disabled: false,
  children: ['This is a list item'],
};

export const DisabledListItem = Template.bind({});
DisabledListItem.args = {
  disabled: true,
  children: ['I am disabled'],
};
