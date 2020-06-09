import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledPanel } from './Panel.styles';

export interface PanelProps {
  whenActive: string;
}

export const Panel: React.FC<PanelProps> = ({ whenActive, children }) => {
  const { activeTab } = useTabsContext();
  return whenActive === activeTab ? <StyledPanel>{children}</StyledPanel> : null;
};
