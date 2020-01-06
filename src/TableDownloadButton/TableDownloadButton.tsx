import * as React from 'react';
import { TableActionButton } from './TableDownloadButton.styles';

export interface Props {
  variant: string;
  children: React.ReactNode;
  disabled?: boolean;
}
export const TableDownloadButton = (props: Props): JSX.Element => {
  const { children, ...rest } = props;
  return <TableActionButton {...rest}>{children}</TableActionButton>;
};
