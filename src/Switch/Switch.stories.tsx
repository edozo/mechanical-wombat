import { StoryFn, Meta } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { SwitchWrapper, SwitchWrapperProps } from './SwitchWrapper';

export default {
  title: 'Components/Switch',
  argTypes: { onChange: { action: 'changed' } },
  component: SwitchWrapper,
} as Meta;

const Template: StoryFn<SwitchWrapperProps> = args => <SwitchWrapper {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
  id: 'switch-story',
  defaultToggleValue: true,
  size: 'small',
  offText: 'off',
  onText: 'on',
  disabled: false,
};

export const Interactions = Template.bind({});
Interactions.args = {
  id: 'switch-interactions',
  defaultToggleValue: false,
  size: 'default',
  offText: 'No',
  onText: 'Yes',
  disabled: false,
};

interface InteractionsPlayProps {
  canvasElement: HTMLCanvasElement;
}

Interactions.play = async ({ canvasElement }: InteractionsPlayProps) => {
  const canvas = within(canvasElement);
  const checkbox = canvas.getByTestId('switch-interactions');

  // starts unchecked
  expect(checkbox).not.toBeChecked();

  // toggle on
  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  // toggle off
  await userEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
};
