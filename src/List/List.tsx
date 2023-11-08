import React from 'react';
import { ListContext, ListState } from './ListContext';
import { StyledList } from './List.styles';
import { ListItem } from './ListItem/ListItem';
import { ListItemProps } from './ListItem/ListItem.styles';

interface ListComposition {
  Item: React.FC<ListItemProps>;
}

const List: React.FC<ListState> & ListComposition = props => (
  <ListContext.Provider value={props}>
    <StyledList>{props.children}</StyledList>
  </ListContext.Provider>
);

List.Item = ListItem;

export { List };
