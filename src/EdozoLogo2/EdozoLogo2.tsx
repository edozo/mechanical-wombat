import React from 'react';
import { ProductName } from './EdozoLogo2.styles';
import { ReactComponent as Logo } from './edozo-logo.svg';

export interface Props {
  appName?: string;
  colour?: 'Maps' | 'Occupiers' | 'Insight';
  size?: 'small' | 'standard';
}

export const EdozoLogo2: React.FC<Props> = ({ appName, colour = 'Maps', size = 'standard' }) => (
  <div>
    <Logo data-testid="edozoLogo" />
    {appName && (
      <ProductName colour={colour} size={size}>
        {appName}
      </ProductName>
    )}
  </div>
);
