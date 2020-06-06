import { createContext, useContext } from 'react';

interface State {
  setTab: any;
  activeTab: string;
}

const TabsContext = createContext({} as State);
const TabsProvider = TabsContext.Provider;
const TabsConsumer = TabsContext.Consumer;

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components can't be rendered outside TabBar component");
  }
  return context;
}

export { TabsContext, TabsProvider, TabsConsumer, useTabsContext };
