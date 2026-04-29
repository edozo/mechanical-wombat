import { expect, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DropDownV2, DropDownV2Props } from './DropDownV2';

const ITEMS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Disabled option', value: 'disabled', disabled: true },
];

const ITEMS_WITH_THUMBNAILS = [
  { label: 'England', value: 'gb', thumbnail: 'https://flagcdn.com/w40/gb.png' },
  { label: 'France', value: 'fr', thumbnail: 'https://flagcdn.com/w40/fr.png' },
  { label: 'Germany', value: 'de', thumbnail: 'https://flagcdn.com/w40/de.png' },
];

export default {
  title: 'Components/DropDownV2',
  component: DropDownV2,
  argTypes: {
    size: {
      description: 'Trigger size scale.',
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    disabled: {
      description: 'Disables the select.',
      control: { type: 'boolean' },
    },
    placeholder: {
      description: 'Placeholder shown when nothing is selected.',
      control: { type: 'text' },
    },
  },
  args: {
    size: 'md',
    disabled: false,
    placeholder: 'Select…',
  },
} as Meta;

const Template: StoryFn<DropDownV2Props> = (args) => {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: 240 }}>
      <DropDownV2 {...args} value={value} onValueChange={setValue} items={ITEMS} />
    </div>
  );
};

export const Playground = Template.bind({});

export const WithPreselectedValue: StoryFn<DropDownV2Props> = (args) => {
  const [value, setValue] = useState('banana');
  return (
    <div style={{ width: 240 }}>
      <DropDownV2 {...args} value={value} onValueChange={setValue} items={ITEMS} />
    </div>
  );
};

export const WithThumbnails: StoryFn<DropDownV2Props> = (args) => {
  const [value, setValue] = useState('gb');
  return (
    <div style={{ width: 240 }}>
      <DropDownV2 {...args} value={value} onValueChange={setValue} items={ITEMS_WITH_THUMBNAILS} />
    </div>
  );
};

export const Small: StoryFn<DropDownV2Props> = (args) => {
  const [value, setValue] = useState('apple');
  return (
    <div style={{ width: 200 }}>
      <DropDownV2 {...args} size="sm" value={value} onValueChange={setValue} items={ITEMS} />
    </div>
  );
};

export const DisabledSelect: StoryFn<DropDownV2Props> = (args) => (
  <div style={{ width: 240 }}>
    <DropDownV2 {...args} disabled value="apple" onValueChange={() => {}} items={ITEMS} />
  </div>
);

export const Interactions: StoryFn<DropDownV2Props> = () => {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: 240 }}>
      <DropDownV2 value={value} onValueChange={setValue} items={ITEMS} placeholder="Select a fruit" />
    </div>
  );
};

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole('combobox');

  expect(trigger).toBeInTheDocument();
  await userEvent.click(trigger);

  const listbox = await within(document.body).findByRole('listbox');
  expect(listbox).toBeInTheDocument();

  await userEvent.click(within(listbox).getByRole('option', { name: 'Apple' }));
  expect(trigger).toHaveTextContent('Apple');
};
