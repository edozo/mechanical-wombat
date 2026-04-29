import { expect, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToggleGroupV2, ToggleGroupV2Props } from './ToggleGroupV2';

const ITEMS = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
];

export default {
  title: 'Components/ToggleGroupV2',
  component: ToggleGroupV2,
  argTypes: {
    type: {
      description: 'Selection mode.',
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    size: {
      description: 'Size scale.',
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
  },
} as Meta;

export const Single: StoryFn<ToggleGroupV2Props> = () => {
  const [value, setValue] = useState('week');
  return <ToggleGroupV2 type="single" items={ITEMS} value={value} onValueChange={setValue} />;
};

export const Multiple: StoryFn<ToggleGroupV2Props> = () => {
  const [value, setValue] = useState<string[]>(['day', 'week']);
  return <ToggleGroupV2 type="multiple" items={ITEMS} value={value} onValueChange={setValue} />;
};

export const Small: StoryFn<ToggleGroupV2Props> = () => {
  const [value, setValue] = useState('day');
  return <ToggleGroupV2 type="single" size="sm" items={ITEMS} value={value} onValueChange={setValue} />;
};

export const WithDisabledItem: StoryFn<ToggleGroupV2Props> = () => {
  const [value, setValue] = useState('day');
  const items = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week', disabled: true },
    { label: 'Month', value: 'month' },
  ];
  return <ToggleGroupV2 type="single" items={items} value={value} onValueChange={setValue} />;
};

export const Interactions: StoryFn<ToggleGroupV2Props> = () => {
  const [value, setValue] = useState('day');
  return <ToggleGroupV2 type="single" items={ITEMS} value={value} onValueChange={setValue} />;
};

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const dayBtn = canvas.getByRole('radio', { name: 'Day' });
  const weekBtn = canvas.getByRole('radio', { name: 'Week' });

  expect(dayBtn).toHaveAttribute('data-state', 'on');
  expect(weekBtn).toHaveAttribute('data-state', 'off');

  await userEvent.click(weekBtn);
  expect(weekBtn).toHaveAttribute('data-state', 'on');
};
