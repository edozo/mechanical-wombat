import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledPanel } from './Panel.styles';

export interface PanelProps {
  whenActive: string;
}

export const Panel: React.FC<PanelProps> = ({ whenActive, children }): any => {
  const { activeTab } = useTabsContext();
  return whenActive === activeTab ? <StyledPanel isActive={whenActive === activeTab}>{children}</StyledPanel> : null;
};
