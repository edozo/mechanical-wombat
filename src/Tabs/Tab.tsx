import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledTab } from './Tab.styles';

export interface TabProps {
  tab: string;
  tag?: string;
}

export const Tab: React.FC<TabProps> = ({ tab, tag, children, ...props }) => {
  const { setTab, activeTab } = useTabsContext();
  const handleClick = (): void => setTab(tab);
  return (
    <StyledTab as={tag} onClick={handleClick} isActive={activeTab === tab} {...props}>
      {children}
    </StyledTab>
  );
};
