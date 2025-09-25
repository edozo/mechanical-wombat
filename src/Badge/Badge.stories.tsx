import { Meta, StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
    background: { control: 'color' },
  },
} as Meta<BadgeProps>;

const Template: StoryFn<BadgeProps> = (args: BadgeProps) => <Badge {...args} />;

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

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small',
  background: '#E5EEFE',
};

export const XSmall = Template.bind({});
XSmall.args = {
  size: 'xxsmall',
  children: 'XSmall',
  background: '#E5EEFE',
};
