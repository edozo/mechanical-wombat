import React from 'react';
import { StyledErrorColumn } from './ErrorColumn.styles';

export const ErrorColumn: React.FC = ({ children }) => {
  return <StyledErrorColumn>{children}</StyledErrorColumn>;
};
