import * as React from 'react';
import { TableDownloadButton } from './TableDownloadButton';

export default {
  title: 'TableDownloadButton',
  component: TableDownloadButton,
};

export const primaryVariant = (): JSX.Element => (
  <TableDownloadButton variant="primary">
    <p>Icon</p>
  </TableDownloadButton>
);
