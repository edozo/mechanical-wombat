import { expect, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SwitchV2, SwitchV2Props } from './SwitchV2';

export default {
  title: 'Components/SwitchV2',
  component: SwitchV2,
  argTypes: {
    checked: {
      description: 'Whether the switch is on.',
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Disables the switch.',
      control: { type: 'boolean' },
    },
    size: {
      description: 'Size scale.',
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
  },
  args: {
    size: 'md',
    disabled: false,
  },
} as Meta;

const Controlled: StoryFn<SwitchV2Props> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <label htmlFor="switch-story" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
        {checked ? 'On' : 'Off'}
      </label>
      <SwitchV2 {...args} id="switch-story" checked={checked} onCheckedChange={setChecked} />
    </div>
  );
};

export const Playground = Controlled.bind({});

export const Sizes: StoryFn<SwitchV2Props> = () => {
  const [smChecked, setSmChecked] = useState(false);
  const [mdChecked, setMdChecked] = useState(true);
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <SwitchV2 size="sm" checked={smChecked} onCheckedChange={setSmChecked} aria-label="Small switch" />
      <SwitchV2 size="md" checked={mdChecked} onCheckedChange={setMdChecked} aria-label="Medium switch" />
    </div>
  );
};

export const Disabled: StoryFn<SwitchV2Props> = () => (
  <div style={{ display: 'flex', gap: 16 }}>
    <SwitchV2 checked={false} onCheckedChange={() => {}} disabled aria-label="Disabled off" />
    <SwitchV2 checked onCheckedChange={() => {}} disabled aria-label="Disabled on" />
  </div>
);

export const Interactions: StoryFn<SwitchV2Props> = () => {
  const [checked, setChecked] = useState(false);
  return <SwitchV2 checked={checked} onCheckedChange={setChecked} aria-label="Toggle" />;
};

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchEl = canvas.getByRole('switch');

  expect(switchEl).toHaveAttribute('data-state', 'unchecked');
  await userEvent.click(switchEl);
  expect(switchEl).toHaveAttribute('data-state', 'checked');
  await userEvent.click(switchEl);
  expect(switchEl).toHaveAttribute('data-state', 'unchecked');
};
