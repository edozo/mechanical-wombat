import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { TableDownloadButton, TableDownloadButtonProps } from './TableDownloadButton';

export default {
  title: 'Components/TableDownloadButton',
  component: TableDownloadButton,
} as Meta;

const Template: Story<TableDownloadButtonProps> = args => (
  <TableDownloadButton {...args}>
    <p>Icon</p>
  </TableDownloadButton>
);

export const Controlled = Template.bind({});
Controlled.args = {
  variant: 'primary',
};
