import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { TableActionButton } from './TableDownloadButton.styles';

export interface TableDownloadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  background?: string;
  children: React.ReactNode;
}

export const TableDownloadButton: React.FC<TableDownloadButtonProps> = props => {
  const { children, ...rest } = props;
  return (
    <TableActionButton type="button" {...rest}>
      {children}
    </TableActionButton>
  );
};
