import React, { PropsWithChildren } from 'react';
import { useTabsContext } from './TabsContext';
import { StyledTab, StyledTabWrapper } from './Tab.styles';

export interface TabProps extends PropsWithChildren<any> {
  tabId: string;
  beforeOnChange?: (handleClick: () => void) => void;
}

export const Tab: React.FC<TabProps> = ({ tabId, beforeOnChange, children, ...rest }) => {
  const { setActiveTab, activeTab } = useTabsContext();
  const clickCallback = (): void => {
    if (activeTab === tabId) return;
    setActiveTab(tabId);
  };

  const handleClick = (): void => {
    beforeOnChange ? beforeOnChange(clickCallback) : clickCallback();
  };
  return (
    <StyledTab onClick={handleClick} isActive={activeTab === tabId} {...rest}>
      {children}
    </StyledTab>
  );
};

export interface TabWrapperProps extends PropsWithChildren<any> {
  stretch?: boolean;
}

export const TabWrapper: React.FC<TabWrapperProps> = ({ stretch = false, children }) => (
  <StyledTabWrapper stretch={stretch}>{children}</StyledTabWrapper>
);
