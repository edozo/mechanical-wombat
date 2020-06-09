import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledTab, StyledTabWrapper } from './Tab.styles';

export interface TabProps {
  tabId: string;
}

export const Tab: React.FC<TabProps> = ({ tabId, children, ...props }) => {
  const { setActiveTab, activeTab } = useTabsContext();
  const handleClick = (): void => setActiveTab(tabId);
  return (
    <StyledTab onClick={handleClick} isActive={activeTab === tabId} {...props}>
      {children}
    </StyledTab>
  );
};

export interface TabWrapperProps {
  stretch?: boolean;
}

export const TabWrapper: React.FC<TabWrapperProps> = ({ stretch = false, children }) => (
  <StyledTabWrapper stretch={stretch}>{children}</StyledTabWrapper>
);
