import React, { useState } from 'react';
import { TabsProvider } from './TabsContext';
import { Tab, TabProps } from './Tab';
import { Panel, PanelProps } from './Panel';

interface TabsProps {
  initialTab: any;
}

interface TabsComposition {
  Tab: React.FC<TabProps>;
  Panel: React.FC<PanelProps>;
}

const Tabs: React.FC<TabsProps> & TabsComposition = ({ initialTab, children }) => {
  const [tab, setTab] = useState(initialTab);
  return <TabsProvider value={{ activeTab: tab, setTab }}>{children}</TabsProvider>;
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs };
