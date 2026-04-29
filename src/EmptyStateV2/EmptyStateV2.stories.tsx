import { Meta, StoryFn } from '@storybook/react';
import { Search } from 'lucide-react';
import { EmptyStateV2, EmptyStateV2Props } from './EmptyStateV2';

export default {
  title: 'Components/EmptyStateV2',
  component: EmptyStateV2,
  argTypes: {
    title: {
      description: 'Primary message.',
      control: { type: 'text' },
    },
    description: {
      description: 'Supporting text below the title.',
      control: { type: 'text' },
    },
  },
  args: {
    title: 'Nothing here yet',
    description: 'Add some items to get started.',
  },
} as Meta;

const Template: StoryFn<EmptyStateV2Props> = (args) => <EmptyStateV2 {...args} />;

export const Playground = Template.bind({});

export const WithIcon: StoryFn<EmptyStateV2Props> = (args) => <EmptyStateV2 {...args} icon={<Search size={40} />} />;

export const WithAction: StoryFn<EmptyStateV2Props> = (args) => (
  <EmptyStateV2 {...args} icon={<Search size={40} />} action={<button type="button">Add item</button>} />
);

export const TitleOnly: StoryFn<EmptyStateV2Props> = () => <EmptyStateV2 title="No results found" />;
