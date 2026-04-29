import { expect, userEvent, within } from 'storybook/test';
import { Meta, StoryFn } from '@storybook/react';
import { ListV2, ListV2Props } from './ListV2';

export default {
  title: 'Components/ListV2',
  component: ListV2,
  argTypes: {
    variant: {
      description: 'Controls item hover and active colours.',
      control: { type: 'select' },
      options: ['standard', 'platform'],
    },
  },
  args: {
    variant: 'standard',
  },
} as Meta;

const Template: StoryFn<ListV2Props> = (args) => (
  <div style={{ width: 320, border: '1px solid #E5E7EB', borderRadius: 6, overflow: 'hidden' }}>
    <ListV2 {...args}>
      <ListV2.Item>First item</ListV2.Item>
      <ListV2.Item>Second item</ListV2.Item>
      <ListV2.Item>Third item</ListV2.Item>
    </ListV2>
  </div>
);

export const Playground = Template.bind({});

export const WithDisabledItem: StoryFn<ListV2Props> = (args) => (
  <div style={{ width: 320, border: '1px solid #E5E7EB', borderRadius: 6, overflow: 'hidden' }}>
    <ListV2 {...args}>
      <ListV2.Item>First item</ListV2.Item>
      <ListV2.Item disabled>Disabled item</ListV2.Item>
      <ListV2.Item>Third item</ListV2.Item>
    </ListV2>
  </div>
);

export const PlatformVariant: StoryFn<ListV2Props> = (args) => (
  <div style={{ width: 320, border: '1px solid #E5E7EB', borderRadius: 6, overflow: 'hidden' }}>
    <ListV2 {...args} variant="platform">
      <ListV2.Item>First item</ListV2.Item>
      <ListV2.Item>Second item</ListV2.Item>
      <ListV2.Item>Third item</ListV2.Item>
    </ListV2>
  </div>
);

export const Interactions: StoryFn<ListV2Props> = (args) => {
  return (
    <div style={{ width: 320, border: '1px solid #E5E7EB', borderRadius: 6, overflow: 'hidden' }}>
      <ListV2 {...args}>
        <ListV2.Item data-testid="item-1" onClick={() => {}}>
          Clickable item
        </ListV2.Item>
        <ListV2.Item data-testid="item-disabled" disabled onClick={() => {}}>
          Disabled item
        </ListV2.Item>
      </ListV2>
    </div>
  );
};

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const disabledItem = canvas.getByTestId('item-disabled');
  expect(disabledItem).toHaveAttribute('aria-disabled', 'true');

  const clickableItem = canvas.getByTestId('item-1');
  await userEvent.click(clickableItem);
  expect(clickableItem).toBeInTheDocument();
};
