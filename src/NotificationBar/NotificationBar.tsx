import React from 'react';
import { StyledNotificationBar } from './NotificationBar.styles';

export type Props = {
  children?: React.ReactElement;
  variant?: 'alert' | 'info';
};

export const NotificationBar: React.FC<Props> = props => {
  return <StyledNotificationBar {...props}>{props.children}</StyledNotificationBar>;
};
