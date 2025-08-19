import { StoryFn, Meta } from '@storybook/react';
import { EdozoLogo } from './EdozoLogo';

export default {
  title: 'Components/EdozoLogo',
  component: EdozoLogo,
} as Meta;

const Template: StoryFn = args => <EdozoLogo variant={args.variant} {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'edozo',
  beta: false,
};
