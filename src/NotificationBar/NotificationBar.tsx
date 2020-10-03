import React from 'react';
import { StyledNotificationBar } from './NotificationBar.styles';

export type NotificationBarProps = {
  variant?: 'alert' | 'info' | 'warning';
};

export const NotificationBar: React.FC<NotificationBarProps> = ({ children, variant = 'info', ...props }) => (
  <StyledNotificationBar variant={variant} {...props}>
    {children}
  </StyledNotificationBar>
);
