import { createContext, useContext } from 'react';
import { ListV2Variant } from 'ListV2/ListV2';

interface ListV2ContextValue {
  variant: ListV2Variant;
}

const ListV2Context = createContext<ListV2ContextValue | null>(null);

export const useListV2Context = (): ListV2ContextValue => {
  const context = useContext(ListV2Context);
  if (!context) {
    throw new Error('ListV2.Item must be rendered inside a ListV2 component');
  }
  return context;
};

export { ListV2Context };
