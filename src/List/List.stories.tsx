import { StoryFn, Meta } from '@storybook/react';
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

const Template: StoryFn = ({ children, ...args }) => (
  <List {...args}>
    {children.map(({ node, disabled = false }: { node: React.ReactNode; disabled: boolean }) => (
      <List.Item disabled={disabled} key={Math.random()}>
        {node}
      </List.Item>
    ))}
  </List>
);

export const Controlled = Template.bind({});
Controlled.args = {
  children: [
    { node: 'First', disabled: false },
    { node: 'Second', disabled: false },
    { node: 'Third', disabled: false },
  ],
};

export const DisabledListItem = Template.bind({});
DisabledListItem.args = {
  children: [
    { node: 'First', disabled: false },
    { node: 'Second', disabled: true },
    { node: 'Third', disabled: false },
  ],
};
