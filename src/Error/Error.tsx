import React from 'react';
import { ErrorBody } from './Error.styles';

export interface ErrorProps {
  children?: React.ReactNode;
}

export const Error: React.FC<ErrorProps> = ({ children }) => {
  return <ErrorBody>{children}</ErrorBody>;
};
