import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledTab, StyledTabWrapper } from './Tab.styles';

export interface TabProps {
  tabId: string;
  beforeOnChange?: () => boolean;
}

export const Tab: React.FC<TabProps> = ({ tabId, beforeOnChange, children, ...rest }) => {
  const { setActiveTab, activeTab } = useTabsContext();
  const handleClick = (): void => {
    if (activeTab === tabId) return;

    const shouldChange = beforeOnChange?.();
    if (beforeOnChange && !shouldChange && shouldChange !== undefined) return;
    setActiveTab(tabId);
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
