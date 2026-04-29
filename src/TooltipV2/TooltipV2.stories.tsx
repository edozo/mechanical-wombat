import { expect, userEvent, within } from 'storybook/test';
import { Meta, StoryFn } from '@storybook/react';
import { ButtonV3 } from 'ButtonV3/ButtonV3';
import { TooltipV2, TooltipV2Props } from './TooltipV2';

export default {
  title: 'Components/TooltipV2',
  component: TooltipV2,
  argTypes: {
    content: {
      description: 'Content displayed inside the tooltip bubble.',
      control: { type: 'text' },
    },
    side: {
      description: 'Side the tooltip appears on relative to the trigger.',
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    delayDuration: {
      description: 'Delay in ms before the tooltip opens.',
      control: { type: 'number' },
    },
  },
  args: {
    content: 'This is a tooltip',
    side: 'bottom',
    delayDuration: 400,
  },
} as Meta;

const Template: StoryFn<TooltipV2Props> = (args) => (
  <div style={{ padding: 64, display: 'flex', justifyContent: 'center' }}>
    <TooltipV2 {...args}>
      <ButtonV3 variant="secondary">Hover me</ButtonV3>
    </TooltipV2>
  </div>
);

export const Playground = Template.bind({});

export const Sides: StoryFn = () => (
  <div style={{ padding: 80, display: 'flex', gap: 16, justifyContent: 'center' }}>
    {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
      <TooltipV2 key={side} content={`Tooltip on ${side}`} side={side} delayDuration={0}>
        <ButtonV3 variant="secondary">{side}</ButtonV3>
      </TooltipV2>
    ))}
  </div>
);

export const Interactions: StoryFn<TooltipV2Props> = () => (
  <div style={{ padding: 64, display: 'flex', justifyContent: 'center' }}>
    <TooltipV2 content="Tooltip content" side="bottom" delayDuration={0}>
      <ButtonV3 variant="secondary">Trigger</ButtonV3>
    </TooltipV2>
  </div>
);

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole('button', { name: 'Trigger' });

  await userEvent.hover(trigger);
  expect(await within(document.body).findByRole('tooltip')).toBeInTheDocument();

  await userEvent.unhover(trigger);
};
