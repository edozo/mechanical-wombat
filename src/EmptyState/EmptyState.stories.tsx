import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { StackIcon } from '../Icons';
import { EmptyState } from './EmptyState';

export default {
  title: 'OccupierPlans/EmptyState',
  component: EmptyState,
} as Meta;

const Template: Story = args => <EmptyState {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'simple text',
};

export const Icon = Template.bind({});
Icon.args = {
  children: (
    <Fragment>
      <StackIcon />
      with icon and a{' '}
      <button type="button" onClick={() => console.log('click')}>
        button
      </button>
    </Fragment>
  ),
};
