import React from 'react';
import { StyledItem } from './Item.styles';

export interface ItemProps {
  backgroundColor?: string;
}

export const Item: React.FC<ItemProps> = ({ backgroundColor, children }) => (
  <StyledItem backgroundColor={backgroundColor}>{children}</StyledItem>
);
