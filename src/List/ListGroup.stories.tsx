import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ListGroup } from './ListGroup';

export default {
  title: 'Components/List',
  component: ListGroup,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    backgrounds: {
      default: 'orange',
    },
  },
} as Meta;

const Template: Story = ({ children, ...args }) => (
  <ListGroup {...args}>
    {children.map((child: React.ReactNode) => (
      <ListGroup.Item key={Math.random()}>{child}</ListGroup.Item>
    ))}
  </ListGroup>
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

export const DefaultList: Story = args => (
  <ListGroup {...args}>
    <ListGroup.Item key={Math.random()}>
      <ControlledListItem {...ControlledListItem.args} />
      <DisabledListItem {...DisabledListItem.args} />
    </ListGroup.Item>
  </ListGroup>
);

export const SingleItemList: Story = args => (
  <ListGroup {...args}>
    <ListGroup.Item key={Math.random()}>
      <ControlledListItem {...ControlledListItem.args} />
    </ListGroup.Item>
  </ListGroup>
);
