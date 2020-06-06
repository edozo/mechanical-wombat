import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledPanel } from './Panel.styles';

export interface PanelProps {
  whenActive: string;
  tag?: any;
}

export const Panel: React.FC<PanelProps> = ({ whenActive, tag, children }): any => {
  const { activeTab } = useTabsContext();
  return whenActive === activeTab ? (
    <StyledPanel as={tag} isActive={whenActive === activeTab}>
      {children}
    </StyledPanel>
  ) : null;
};
