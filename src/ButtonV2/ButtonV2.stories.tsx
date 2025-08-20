import { StoryFn, Meta } from '@storybook/react';
import { ButtonV2, ButtonV2Props } from './ButtonV2';
import { Badge } from '../Badge';

export default {
  title: 'Components/ButtonV2',
  component: ButtonV2,
} as Meta;

const Template: StoryFn<ButtonV2Props> = args => <ButtonV2 {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
  disabled: false,
  variant: 'primary',
  size: 'standard',
  radius: 'standard',
  children: 'This is my button',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  disabled: false,
  variant: 'secondary',
  size: 'standard',
  radius: 'standard',
  children: [
    'This is my button with a badge',
    <Badge color="#ffffff" background="#2818f9" size="small">
      new
    </Badge>,
  ],
};
