import React from 'react';
import { ReactComponent as Logo } from './edozo-logo.svg';
import { ProductName } from './EdozoLogo.styles';

interface Props {
  appName?: string;
}

export const EdozoLogo: React.FC<Props> = ({ appName }) => (
  <div>
    <Logo data-testid="edozoLogo" />
    {appName && <ProductName>{appName}</ProductName>}
  </div>
);
