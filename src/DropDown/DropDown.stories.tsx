import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DropDown } from './DropDown';

export default {
  title: 'Components/DropDown',
  argTypes: { onChange: { action: 'changed' } },
  component: DropDown,
} as Meta;

const itemsWithImages = [
  {
    label: 'Item 1',
    value: 'item1',
    thumbnail:
      'https://is2-ssl.mzstatic.com/image/thumb/Purple69/v4/6f/b1/4a/6fb14a9a-d356-0d33-69c9-2f39ed7f0ecd/source/256x256bb.jpg',
  },
  {
    label: 'Item 2',
    value: 'item2',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item 3',
    value: 'item3',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
];

const items = [
  {
    label: 'Item 1',
    value: 'item1',
  },
  {
    label: 'Item 2',
    value: 'item2',
  },
  {
    label: 'Item 3',
    value: 'item3',
  },
];

export const WithImages: Story = args => (
  <DropDown items={itemsWithImages} onChange={args.onChange} initialSelectedItem={itemsWithImages[1]} />
);

export const WithoutImages: Story = args => (
  <DropDown items={items} onChange={args.onChange} initialSelectedItem={items[2]} />
);
