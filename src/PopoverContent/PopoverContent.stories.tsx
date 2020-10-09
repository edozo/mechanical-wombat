import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PopoverContent } from './PopoverContent';
import { List, ListItem } from '../List';

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
      <ListItem>Non-clicky item</ListItem>
      <ListItem disabled>Disabled item</ListItem>
    </List>
  ),
};
