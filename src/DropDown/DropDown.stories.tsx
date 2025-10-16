import { StoryFn, Meta } from '@storybook/react';
import { DropDown, DropDownItem, Props } from './DropDown';

export default {
  title: 'Components/DropDown',
  argTypes: { onChange: { action: 'changed' } },
  component: DropDown,
} as Meta;

const itemsWithImages: DropDownItem[] = [
  {
    label: 'Item 1',
    value: 'item1',
    thumbnail:
      'https://is2-ssl.mzstatic.com/image/thumb/Purple69/v4/6f/b1/4a/6fb14a9a-d356-0d33-69c9-2f39ed7f0ecd/source/256x256bb.jpg',
  },
  {
    label: 'Item 2',
    value: 'item2',
    thumbnail:
      'https://is2-ssl.mzstatic.com/image/thumb/Purple69/v4/6f/b1/4a/6fb14a9a-d356-0d33-69c9-2f39ed7f0ecd/source/256x256bb.jpg',
  },
  {
    label: 'Item 3',
    value: 'item3',
    thumbnail:
      'https://is2-ssl.mzstatic.com/image/thumb/Purple69/v4/6f/b1/4a/6fb14a9a-d356-0d33-69c9-2f39ed7f0ecd/source/256x256bb.jpg',
  },
];

const items: DropDownItem[] = [
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

const Template: StoryFn<Props> = args => (
  <div style={{ height: '200px' }}>
    <DropDown {...args} />
  </div>
);

export const WithImages = Template.bind({});
WithImages.args = {
  selectedItem: itemsWithImages[1],
  items: itemsWithImages,
  onChange: () => {},
  size: 'standard',
};

export const WithoutImages = Template.bind({});
WithoutImages.args = {
  selectedItem: items[2],
  items: items,
  onChange: () => {},
  size: 'standard',
};

export const SmallWithImages = Template.bind({});
SmallWithImages.args = {
  selectedItem: itemsWithImages[0],
  items: itemsWithImages,
  onChange: () => {},
  size: 'small',
};

export const SmallWithoutImages = Template.bind({});
SmallWithoutImages.args = {
  selectedItem: items[1],
  items: items,
  onChange: () => {},
  size: 'small',
};
