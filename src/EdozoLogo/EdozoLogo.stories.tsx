import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EdozoLogo } from './EdozoLogo';

export default {
  title: 'Components/EdozoLogo',
  component: EdozoLogo,
} as Meta;

const Template: Story = args => <EdozoLogo variant={args.variant} {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'edozo',
  beta: false,
};
