import React, { createContext, useContext } from 'react';

export interface ListState extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'platform';
}

type ListHook = () => ListState;

const ListContext = createContext<ListState>({ variant: 'standard' });

export const useListContext: ListHook = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("List compound components can't be rendered outside List component");
  }
  return context;
};

export { ListContext };
