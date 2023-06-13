import React from 'react';
import { EmptyStateWrapper } from './EmptyState.styles';

interface Props {
  children: React.ReactNode;
}

export const EmptyState: React.FC<Props> = ({ children }) => <EmptyStateWrapper>{children}</EmptyStateWrapper>;
