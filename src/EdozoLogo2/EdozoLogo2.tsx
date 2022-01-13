import React from 'react';
import { ProductName } from './EdozoLogo2.styles';
import { ReactComponent as Logo } from './edozo-logo.svg';

export interface Props {
  appName?: string;
  size?: 'small' | 'standard';
}

export const EdozoLogo2: React.FC<Props> = ({ appName, size = 'standard' }) => (
  <div>
    <Logo data-testid="edozoLogo" />
    {appName && <ProductName size={size}>{appName}</ProductName>}
  </div>
);
