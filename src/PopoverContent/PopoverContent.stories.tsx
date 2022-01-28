import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PopoverContent } from './PopoverContent';
import { List } from '../List';

export default {
  title: 'Components/PopoverContent',
  argTypes: { onChange: { action: 'changed' } },
  component: PopoverContent,
} as Meta;

const Template: Story = args => <PopoverContent {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  radius: 'small',
  children: <div style={{ padding: '8px' }}>This is my popoverContent</div>,
};

// This story needs improving
export const ListContent = Template.bind({});
ListContent.args = {
  children: (
    <List>
      <List.Item>Non-clicky item</List.Item>
      <List.Item disabled>Disabled item</List.Item>
    </List>
  ),
};
