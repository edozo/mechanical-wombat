import React, { createContext, useContext } from 'react';
import { StyledList } from './List.styles';
import { ListItem } from './ListItem/ListItem';

export interface Context extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'platform';
}

const ListContext = createContext<Context>({ variant: 'standard' });

export const useListContext: Function = (): any => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("List compound components can't be rendered outside List component");
  }
  return context;
};

const List = (props: Context): any => (
  <ListContext.Provider value={props}>
    <StyledList {...props}>{props.children}</StyledList>
  </ListContext.Provider>
);

List.Item = ListItem;

export { List };
