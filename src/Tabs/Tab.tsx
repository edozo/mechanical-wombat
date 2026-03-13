import React from 'react';
import { useTabsContext } from './TabsContext';
import { StyledTab, StyledTabWrapper } from './Tab.styles';

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tabId: string;
  children: React.ReactNode;
  disabled?: boolean;
  beforeOnChange?: (handleClick: () => void) => void;
}

export const Tab: React.FC<TabProps> = ({ tabId, beforeOnChange, children, disabled, ...rest }) => {
  const { setActiveTab, activeTab } = useTabsContext();
  const clickCallback = (): void => {
    if (activeTab === tabId) return;
    setActiveTab(tabId);
  };

  const handleClick = (): void => {
    if (disabled) return;
    beforeOnChange ? beforeOnChange(clickCallback) : clickCallback();
  };

  return (
    <StyledTab $disabled={disabled} onClick={handleClick} $isActive={activeTab === tabId} {...rest}>
      {children}
    </StyledTab>
  );
};

export interface TabWrapperProps {
  stretch?: boolean;
  children: React.ReactNode;
}

export const TabWrapper: React.FC<TabWrapperProps> = ({ stretch = false, children }) => (
  <StyledTabWrapper $stretch={stretch}>{children}</StyledTabWrapper>
);
