import { expect, userEvent, within } from 'storybook/test';
import { Meta, StoryFn } from '@storybook/react';
import { ButtonV3 } from 'ButtonV3/ButtonV3';
import { PopoverV2, PopoverV2Props } from './PopoverV2';

export default {
  title: 'Components/PopoverV2',
  component: PopoverV2,
  argTypes: {
    defaultOpen: {
      description: 'Whether the popover is open by default (uncontrolled).',
      control: { type: 'boolean' },
    },
  },
  args: {
    defaultOpen: false,
  },
} as Meta;

export const Playground: StoryFn<PopoverV2Props> = (args) => (
  <div style={{ padding: 64, display: 'flex', justifyContent: 'center' }}>
    <PopoverV2 {...args}>
      <PopoverV2.Trigger asChild>
        <ButtonV3 variant="secondary">Open popover</ButtonV3>
      </PopoverV2.Trigger>
      <PopoverV2.Content>
        <div style={{ padding: 16, fontFamily: 'Inter, sans-serif', fontSize: 14, maxWidth: 240 }}>
          <p style={{ margin: '0 0 8px', fontWeight: 600 }}>Popover heading</p>
          <p style={{ margin: 0, color: '#6B7280' }}>Some supporting content goes here.</p>
        </div>
      </PopoverV2.Content>
    </PopoverV2>
  </div>
);

export const Sides: StoryFn = () => (
  <div style={{ padding: 80, display: 'flex', gap: 16, justifyContent: 'center' }}>
    {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
      <PopoverV2 key={side}>
        <PopoverV2.Trigger asChild>
          <ButtonV3 variant="secondary">{side}</ButtonV3>
        </PopoverV2.Trigger>
        <PopoverV2.Content side={side} align="center">
          <div style={{ padding: 12, fontFamily: 'Inter, sans-serif', fontSize: 13 }}>Opens on {side}</div>
        </PopoverV2.Content>
      </PopoverV2>
    ))}
  </div>
);

export const WithCloseButton: StoryFn = () => (
  <div style={{ padding: 64, display: 'flex', justifyContent: 'center' }}>
    <PopoverV2>
      <PopoverV2.Trigger asChild>
        <ButtonV3 variant="secondary">Open</ButtonV3>
      </PopoverV2.Trigger>
      <PopoverV2.Content>
        <div style={{ padding: 16, fontFamily: 'Inter, sans-serif', fontSize: 14, maxWidth: 240 }}>
          <p style={{ margin: '0 0 12px' }}>Content with a close button.</p>
          <PopoverV2.Close asChild>
            <ButtonV3 variant="secondary" size="sm">
              Close
            </ButtonV3>
          </PopoverV2.Close>
        </div>
      </PopoverV2.Content>
    </PopoverV2>
  </div>
);

export const Interactions: StoryFn = () => (
  <div style={{ padding: 64, display: 'flex', justifyContent: 'center' }}>
    <PopoverV2>
      <PopoverV2.Trigger asChild>
        <ButtonV3 variant="secondary">Open popover</ButtonV3>
      </PopoverV2.Trigger>
      <PopoverV2.Content>
        <div style={{ padding: 16, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
          <span data-testid="popover-content">Popover is open</span>
        </div>
      </PopoverV2.Content>
    </PopoverV2>
  </div>
);

Interactions.tags = ['play-fn'];

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole('button', { name: 'Open popover' });

  expect(within(document.body).queryByTestId('popover-content')).not.toBeInTheDocument();

  await userEvent.click(trigger);
  expect(await within(document.body).findByTestId('popover-content')).toBeInTheDocument();

  await userEvent.click(trigger);
  expect(within(document.body).queryByTestId('popover-content')).not.toBeInTheDocument();
};
