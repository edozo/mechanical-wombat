import React, { PropsWithChildren } from 'react';
import { useTabsContext } from './TabsContext';
import { StyledPanel } from './Panel.styles';

export interface PanelProps extends PropsWithChildren<any> {
  tabId: string;
}

export const Panel: React.FC<PanelProps> = ({ tabId, children, ...rest }) => {
  const { activeTab } = useTabsContext();
  return tabId === activeTab ? <StyledPanel {...rest}>{children}</StyledPanel> : null;
};
