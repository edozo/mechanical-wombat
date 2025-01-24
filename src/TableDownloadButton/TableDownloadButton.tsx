import * as React from 'react';
import { TableActionButton } from './TableDownloadButton.styles';

export interface TableDownloadButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  background?: string;
}

export const TableDownloadButton: React.FC<TableDownloadButtonProps> = ({ children, variant, background }) => {
  return (
    <TableActionButton variant={variant} background={background}>
      {children}
    </TableActionButton>
  );
};
