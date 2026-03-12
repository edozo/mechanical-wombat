import { Meta, StoryFn } from '@storybook/react';
import { AppName, EdozoLogoV2, EdozoLogoV2Props } from './EdozoLogoV2';

export default {
  title: 'Components/EdozoLogoV2',
  component: EdozoLogoV2,
  argTypes: {
    appName: {
      description: 'App name to display.',
      control: { type: 'select' },
      options: ['edozo', 'maps', 'occupiers', 'insight', 'reports', 'extract'],
    },
    size: {
      description: 'Visual size of the logo.',
      control: { type: 'select' },
      options: ['small', 'standard'],
    },
  },
  args: {
    appName: 'edozo',
    size: 'standard',
  },
} as Meta;

const Template: StoryFn<EdozoLogoV2Props> = (args) => <EdozoLogoV2 {...args} />;

export const Playground = Template.bind({});

export const AllProducts: StoryFn<EdozoLogoV2Props> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    {(['edozo', 'maps', 'occupiers', 'insight', 'reports', 'extract'] as AppName[]).map((name) => (
      <EdozoLogoV2 key={name} {...args} appName={name} />
    ))}
  </div>
);

AllProducts.args = {
  size: 'standard',
};
