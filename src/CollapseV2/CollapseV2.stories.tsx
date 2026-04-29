import { expect, userEvent, within } from 'storybook/test';
import { Meta, StoryFn } from '@storybook/react';
import { CollapseV2, CollapseV2Props } from './CollapseV2';

export default {
  title: 'Components/CollapseV2',
  component: CollapseV2,
  argTypes: {
    trigger: {
      description: 'Trigger label.',
      control: { type: 'text' },
    },
    defaultOpen: {
      description: 'Initially open.',
      control: { type: 'boolean' },
    },
    square: {
      description: 'Removes border radius for flush edge placement.',
      control: { type: 'boolean' },
    },
  },
  args: {
    trigger: 'Show details',
    defaultOpen: false,
    square: false,
  },
} as Meta;

const Template: StoryFn<CollapseV2Props> = (args) => (
  <div style={{ width: 400 }}>
    <CollapseV2 {...args}>
      <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
        This is the collapsible content. It can contain any React node.
      </p>
    </CollapseV2>
  </div>
);

export const Playground = Template.bind({});

export const DefaultOpen: StoryFn<CollapseV2Props> = (args) => (
  <div style={{ width: 400 }}>
    <CollapseV2 {...args} defaultOpen trigger="Details">
      <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Opened by default.</p>
    </CollapseV2>
  </div>
);

export const Square: StoryFn<CollapseV2Props> = (args) => (
  <div style={{ width: 400 }}>
    <CollapseV2 {...args} square trigger="Show details">
      <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
        No border radius — sits flush against container or browser edges.
      </p>
    </CollapseV2>
  </div>
);

export const Interactions: StoryFn<CollapseV2Props> = (args) => (
  <div style={{ width: 400 }}>
    <CollapseV2 {...args} trigger="Toggle content">
      <p data-testid="content" style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
        Hidden content revealed
      </p>
    </CollapseV2>
  </div>
);

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole('button');

  expect(canvas.queryByTestId('content')).toBeInTheDocument();

  await userEvent.click(trigger);
  await userEvent.click(trigger);
  expect(canvas.getByTestId('content')).toBeInTheDocument();
};
