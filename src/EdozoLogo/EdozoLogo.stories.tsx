import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EdozoLogo } from './EdozoLogo';

export default {
  title: 'OccupierPlans/EdozoLogo',
  component: EdozoLogo,
} as Meta;

const Template: Story = args => <EdozoLogo {...args} />;

export const Default = Template.bind({});
