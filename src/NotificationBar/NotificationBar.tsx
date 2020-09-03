import React from 'react';
import { StyledNotificationBar } from './NotificationBar.styles';

export type Props = {
  children?: React.ReactNode;
  variant?: 'alert' | 'info' | 'warning';
};

export const NotificationBar: React.FC<Props> = ({ children, variant = 'info', ...props }) => {
  return (
    <StyledNotificationBar variant={variant} {...props}>
      {children}
    </StyledNotificationBar>
  );
};
