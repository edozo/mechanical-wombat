import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledTab, StyledTabWrapper } from './Tab.styles';

export interface TabProps {
  tab: string;
}

export const Tab: React.FC<TabProps> = ({ tab, children, ...props }) => {
  const { setTab, activeTab } = useTabsContext();
  const handleClick = (): void => setTab(tab);
  return (
    <StyledTab onClick={handleClick} isActive={activeTab === tab} {...props}>
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
