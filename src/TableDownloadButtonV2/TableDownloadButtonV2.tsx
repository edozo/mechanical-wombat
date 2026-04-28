import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { TableActionButtonV2 } from './TableDownloadButtonV2.styles';

export interface TableDownloadButtonV2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  background?: string;
  children: React.ReactNode;
}

export const TableDownloadButtonV2: React.FC<TableDownloadButtonV2Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <TableActionButtonV2 type="button" {...rest}>
      {children}
    </TableActionButtonV2>
  );
};
