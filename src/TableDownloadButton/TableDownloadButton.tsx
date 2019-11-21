import * as React from 'react';
import { TableActionButton } from './TableDownloadButton.styles';

export interface Props {
  variant: string;
  children: React.ReactNode;
}
export const TableDownloadButton = (props: Props): JSX.Element => (
  <TableActionButton {...props}>{props.children}</TableActionButton>
);
