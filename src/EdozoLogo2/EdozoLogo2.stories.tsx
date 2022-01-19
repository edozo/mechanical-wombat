import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EdozoLogo2 } from './EdozoLogo2';

export default {
  title: 'Components/EdozoLogo2',
  component: EdozoLogo2,
} as Meta;

const Template: Story = args => <EdozoLogo2 {...args} />;

export const Default = Template.bind({});

export const WithOccupiers = Template.bind({});
WithOccupiers.args = {
  appName: 'occupiers',
  size: 'standard',
};

export const WithMaps = Template.bind({});
WithMaps.args = {
  appName: 'maps',
  size: 'standard',
};

export const WithInsight = Template.bind({});
WithInsight.args = {
  appName: 'insight',
  size: 'standard',
};

export const WithHelpCentre = Template.bind({});
WithHelpCentre.args = {
  appName: 'helpCentre',
  size: 'standard',
};
