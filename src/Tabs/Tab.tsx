import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledTab, StyledTabWrapper } from './Tab.styles';

export interface TabProps {
  tabId: string;
  onSelect?: () => void;
}

export const Tab: React.FC<TabProps> = ({ tabId, onSelect, children, ...rest }) => {
  const { setActiveTab, activeTab } = useTabsContext();
  const handleClick = (): void => {
    setActiveTab(tabId);
    onSelect && onSelect();
  };
  return (
    <StyledTab onClick={handleClick} isActive={activeTab === tabId} {...rest}>
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
