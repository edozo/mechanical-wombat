import { StoryFn, Meta } from '@storybook/react';
import { TableDownloadButtonV2, TableDownloadButtonV2Props } from './TableDownloadButtonV2';

export default {
  title: 'Components/TableDownloadButtonV2',
  component: TableDownloadButtonV2,
  argTypes: {
    variant: {
      description: 'Visual intent of the button.',
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      description: 'Disables the button and applies a muted appearance.',
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'primary',
    disabled: false,
  },
} as Meta;

const Template: StoryFn<TableDownloadButtonV2Props> = (args) => (
  <TableDownloadButtonV2 {...args}>Download</TableDownloadButtonV2>
);

export const Playground = Template.bind({});

export const Primary: StoryFn<TableDownloadButtonV2Props> = (args) => (
  <TableDownloadButtonV2 {...args} variant="primary">
    Download
  </TableDownloadButtonV2>
);

export const Secondary: StoryFn<TableDownloadButtonV2Props> = (args) => (
  <TableDownloadButtonV2 {...args} variant="secondary">
    Download
  </TableDownloadButtonV2>
);

export const Variants: StoryFn<TableDownloadButtonV2Props> = (args) => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <TableDownloadButtonV2 {...args} variant="primary">
      Primary
    </TableDownloadButtonV2>
    <TableDownloadButtonV2 {...args} variant="secondary">
      Secondary
    </TableDownloadButtonV2>
  </div>
);

export const Disabled: StoryFn<TableDownloadButtonV2Props> = (args) => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <TableDownloadButtonV2 {...args} variant="primary" disabled>
      Primary
    </TableDownloadButtonV2>
    <TableDownloadButtonV2 {...args} variant="secondary" disabled>
      Secondary
    </TableDownloadButtonV2>
  </div>
);
