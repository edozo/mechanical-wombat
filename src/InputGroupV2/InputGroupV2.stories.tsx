import { expect, userEvent, within } from 'storybook/test';
import { Meta, StoryFn } from '@storybook/react';
import { Search } from 'lucide-react';
import { InputGroupV2, InputGroupV2Props } from './InputGroupV2';

export default {
  title: 'Components/InputGroupV2',
  component: InputGroupV2,
  argTypes: {
    radius: {
      description: 'Border radius style.',
      control: { type: 'select' },
      options: ['standard', 'round'],
    },
    inputSize: {
      description: 'Padding scale for Input and Textarea.',
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    border: {
      description: 'Show border around the group.',
      control: { type: 'boolean' },
    },
  },
  args: {
    radius: 'standard',
    inputSize: 'sm',
    border: true,
  },
} as Meta;

export const WithIconEnd: StoryFn<InputGroupV2Props> = (args) => (
  <InputGroupV2 {...args} style={{ width: 320 }}>
    <InputGroupV2.Input placeholder="Search…" />
    <InputGroupV2.Item>
      <Search size={16} />
    </InputGroupV2.Item>
  </InputGroupV2>
);

export const WithButton: StoryFn<InputGroupV2Props> = (args) => (
  <InputGroupV2 {...args} style={{ width: 320 }}>
    <InputGroupV2.Input placeholder="Enter a value…" />
    <InputGroupV2.Button>Submit</InputGroupV2.Button>
  </InputGroupV2>
);

export const WithIconStart: StoryFn<InputGroupV2Props> = (args) => (
  <InputGroupV2 {...args} style={{ width: 320 }}>
    <InputGroupV2.Item>
      <Search size={16} />
    </InputGroupV2.Item>
    <InputGroupV2.Input placeholder="Search…" />
  </InputGroupV2>
);

export const Round: StoryFn<InputGroupV2Props> = (args) => (
  <InputGroupV2 {...args} radius="round" style={{ width: 320 }}>
    <InputGroupV2.Input placeholder="Search…" />
    <InputGroupV2.Item>
      <Search size={16} />
    </InputGroupV2.Item>
  </InputGroupV2>
);

export const Large: StoryFn<InputGroupV2Props> = (args) => (
  <InputGroupV2 {...args} inputSize="md" style={{ width: 320 }}>
    <InputGroupV2.Input placeholder="Large input…" />
    <InputGroupV2.Button>Go</InputGroupV2.Button>
  </InputGroupV2>
);

export const WithTextarea: StoryFn<InputGroupV2Props> = (args) => (
  <InputGroupV2 {...args} style={{ width: 320 }}>
    <InputGroupV2.Textarea placeholder="Write something…" rows={3} />
    <InputGroupV2.Button>Send</InputGroupV2.Button>
  </InputGroupV2>
);

export const Interactions: StoryFn<InputGroupV2Props> = (args) => (
  <InputGroupV2 {...args} style={{ width: 320 }}>
    <InputGroupV2.Input data-testid="input" placeholder="Type here…" />
    <InputGroupV2.Button data-testid="btn">Search</InputGroupV2.Button>
  </InputGroupV2>
);

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByTestId('input');

  await userEvent.type(input, 'hello');
  expect(input).toHaveValue('hello');
};
