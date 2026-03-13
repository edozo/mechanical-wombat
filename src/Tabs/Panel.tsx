import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledPanel } from './Panel.styles';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tabId: string;
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ tabId, children, ...rest }) => {
  const { activeTab } = useTabsContext();
  return tabId === activeTab ? <StyledPanel {...rest}>{children}</StyledPanel> : null;
};
