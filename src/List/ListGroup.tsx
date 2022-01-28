import React, { createContext, useContext } from 'react';
import { StyledList } from './ListGroup.styles';
import { ListItem } from './ListItem/ListItem';

export interface Context extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'menu' | 'platform';
  disabled?: true | false;
}

const ListContext = createContext<Context>({ variant: 'menu', disabled: false });

export const useListContext: Function = (): any => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("List compound components can't be rendered outside List component");
  }
  return context;
};

const ListGroup = (props: Context): any => {
  return (
    <ListContext.Provider value={props}>
      <StyledList disabled={props.disabled} variant={props.variant}>
        {props.children}
      </StyledList>
    </ListContext.Provider>
  );
};

ListGroup.defaultProps = {
  variant: 'menu',
  disabled: false,
};

ListGroup.Item = ListItem;

export { ListGroup };
