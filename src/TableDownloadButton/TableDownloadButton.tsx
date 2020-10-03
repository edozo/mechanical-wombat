import * as React from 'react';
import { TableActionButton } from './TableDownloadButton.styles';

export interface TableDownloadButtonProps {
  variant: string;
  disabled?: boolean;
}
export const TableDownloadButton: React.FC<TableDownloadButtonProps> = props => {
  const { children, ...rest } = props;
  return <TableActionButton {...rest}>{children}</TableActionButton>;
};
