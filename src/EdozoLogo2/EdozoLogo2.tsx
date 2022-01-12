import React from 'react';
import { ProductName, StyledLogo } from './EdozoLogo2.styles';

export interface Props {
  appName?: string;
  colour?: 'Maps' | 'Occupiers' | 'Insight';
  size?: 'small' | 'standard';
}

export const EdozoLogo2: React.FC<Props> = ({ appName, colour = 'Maps', size = 'standard' }) => (
  <div>
    <StyledLogo data-testid="edozoLogo" size={size} />
    {appName && (
      <ProductName colour={colour} size={size}>
        {appName}
      </ProductName>
    )}
  </div>
);
