import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { GlobalSearch, GlobalSearchProps } from './GlobalSearch';

export default {
  title: 'OccupierPlans/GlobalSearch',
  component: GlobalSearch,
  argTypes: { onChange: { action: 'changed' } },
  parameters: {
    backgrounds: {
      default: 'orange',
    },
  },
} as Meta;

const Template: Story<GlobalSearchProps> = args => <GlobalSearch {...args} />;

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'testing',
};

export const WithoutValue = Template.bind({});
WithoutValue.args = {
  placeholder: 'nothing to see here',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
