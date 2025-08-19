import React from 'react';
import { StyledErrorColumn } from './ErrorColumn.styles';

export interface ErrorColumnProps {
  children?: React.ReactNode;
}

export const ErrorColumn: React.FC<ErrorColumnProps> = ({ children }) => {
  return <StyledErrorColumn>{children}</StyledErrorColumn>;
};
