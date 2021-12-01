import React from 'react';
import { Story, Meta } from '@storybook/react';
import { List } from './List';
import { ListItem } from './ListItem';
import { ControlledListItem, DisabledListItem } from './ListItem.stories';

export default {
  title: 'Components/List',
  component: List,
  subcomponents: { ListItem },
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    backgrounds: {
      default: 'orange',
    },
  },
} as Meta;

const Template: Story = ({ children, ...args }) => (
  <List>
    {children.map((child: React.ReactNode) => (
      <ListItem key={Math.random()} {...args}>
        {child}
      </ListItem>
    ))}
  </List>
);

export const Controlled = Template.bind({});
Controlled.args = {
  disabled: false,
  children: ['First', 'Second', 'Third'],
};

export const DefaultList: Story = args => (
  <List {...args}>
    <ControlledListItem {...ControlledListItem.args} />
    <DisabledListItem {...DisabledListItem.args} />
  </List>
);

export const SingleItemList: Story = args => (
  <List {...args}>
    <ControlledListItem {...ControlledListItem.args} />
  </List>
);
