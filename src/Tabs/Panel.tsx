import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledPanel } from './Panel.styles';

export interface PanelProps {
  tabId: string;
}

export const Panel: React.FC<PanelProps> = ({ tabId, children }) => {
  const { activeTab } = useTabsContext();
  return tabId === activeTab ? <StyledPanel>{children}</StyledPanel> : null;
};
