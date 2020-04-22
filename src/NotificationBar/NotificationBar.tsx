import React from 'react';
import { BarDiv } from './NotificationBar.styles';

export type Props = {
  children?: React.ReactElement;
  variant?: 'alert' | 'refresh';
};

export const NotificationBar: React.FC<Props> = props => {
  return <BarDiv {...props}>{props.children}</BarDiv>;
};
