import React from 'react';
import { ErrorBody } from './Error.styles';

export const Error: React.FC = ({ children }) => {
  return <ErrorBody>{children}</ErrorBody>;
};
