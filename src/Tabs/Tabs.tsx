import React, { useState } from 'react';
import { TabsProvider } from './TabsContext';
import { TabWrapper, Tab, TabWrapperProps, TabProps } from './Tab';
import { Panel, PanelProps } from './Panel';

interface TabsProps {
  initialTab: string;
  children: React.ReactNode;
}

interface TabsComposition {
  Tab: React.FC<TabProps>;
  TabWrapper: React.FC<TabWrapperProps>;
  Panel: React.FC<PanelProps>;
}

const Tabs: React.FC<TabsProps> & TabsComposition = ({ initialTab, children }) => {
  const [tab, setActiveTab] = useState(initialTab);
  return <TabsProvider value={{ activeTab: tab, setActiveTab }}>{children}</TabsProvider>;
};

Tabs.Tab = Tab;
Tabs.TabWrapper = TabWrapper;
Tabs.Panel = Panel;

export { Tabs };
