import React, { PropsWithChildren } from 'react';
import { EmptyStateWrapper } from './EmptyState.styles';

export const EmptyState: React.FC<PropsWithChildren<any>> = ({ children }) => (
  <EmptyStateWrapper>{children}</EmptyStateWrapper>
);
