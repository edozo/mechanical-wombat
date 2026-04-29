import { createContext, useContext } from 'react';
import { TabsV2Appearance } from 'TabsV2/TabsV2';

interface TabsV2ContextValue {
  appearance: TabsV2Appearance;
}

const TabsV2Context = createContext<TabsV2ContextValue | null>(null);

export const useTabsV2Context = (): TabsV2ContextValue => {
  const context = useContext(TabsV2Context);
  if (!context) throw new Error('TabsV2 sub-components must be used inside a TabsV2 root');
  return context;
};

export { TabsV2Context };
