import { StoryFn, Meta } from '@storybook/react';
import { ToggleGroup } from './ToggleGroup';

export default {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  argTypes: { onChange: { action: 'changed' } },
} as Meta;

const items = [
  {
    label: 'Item A',
    value: 'itema',
  },
  {
    label: 'Item B',
    value: 'itemb',
  },
  {
    label: 'Item C',
    value: 'itemc',
  },
];

export const Default: StoryFn = args => <ToggleGroup items={items} onChange={args.onChange} selectedItem={items[1]} />;
