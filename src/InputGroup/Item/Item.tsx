import React from 'react';
import { StyledItem, ItemProps } from './Item.styles';

export const Item: React.FC<ItemProps> = ({ backgroundColor, children }) => (
  <StyledItem backgroundColor={backgroundColor}>{children}</StyledItem>
);
