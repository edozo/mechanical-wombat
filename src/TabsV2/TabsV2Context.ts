import { createContext, useContext } from 'react';
import { TabsV2Appearance } from 'TabsV2/TabsV2';

interface TabsV2ContextValue {
  appearance: TabsV2Appearance;
}

const TabsV2Context = createContext<TabsV2ContextValue>({ appearance: 'underline' });

export const useTabsV2Context = (): TabsV2ContextValue => useContext(TabsV2Context);

export { TabsV2Context };
