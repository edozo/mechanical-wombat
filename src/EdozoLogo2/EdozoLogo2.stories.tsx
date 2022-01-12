import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EdozoLogo2 } from './EdozoLogo2';

export default {
  title: 'Components/EdozoLogo2',
  component: EdozoLogo2,
} as Meta;

const Template: Story = args => <EdozoLogo2 {...args} />;

export const Default = Template.bind({});

export const WithName = Template.bind({});
WithName.args = {
  appName: 'Occupiers',
};

export const WithColourAndSmall = Template.bind({});
WithColourAndSmall.args = {
  appName: 'Insight',
  colour: 'Insight',
  size: 'small',
};
